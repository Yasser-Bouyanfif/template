"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type DropdownMenuContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLElement>
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | null>(
  null,
)

function useDropdownMenuContext(component: string) {
  const context = React.useContext(DropdownMenuContext)

  if (!context) {
    throw new Error(`${component} must be used within a <DropdownMenu> instance.`)
  }

  return context
}

type DropdownMenuProps = {
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

function DropdownMenu({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  className,
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const triggerRef = React.useRef<HTMLElement>(null)
  const isControlled = openProp !== undefined
  const open = isControlled ? openProp : uncontrolledOpen

  const setOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange],
  )

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef }}>
      <div className={cn("relative inline-flex", className)}>{children}</div>
    </DropdownMenuContext.Provider>
  )
}

type DropdownMenuTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

const DropdownMenuTrigger = React.forwardRef<HTMLElement, DropdownMenuTriggerProps>(
  (
    { asChild = false, onClick, onKeyDown, children, className, ...props },
    forwardedRef,
  ) => {
    const { open, setOpen, triggerRef } = useDropdownMenuContext("DropdownMenuTrigger")

    const composedRef = useComposedRefs(forwardedRef, triggerRef)

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)

      if (event.defaultPrevented) {
        return
      }

      setOpen(!open)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
      onKeyDown?.(event)

      if (event.defaultPrevented) {
        return
      }

      if (event.key === "Escape") {
        setOpen(false)
        return
      }

      if (event.key === " " || event.key === "Enter" || event.key === "ArrowDown") {
        event.preventDefault()
        setOpen(true)
      }
    }

    const sharedProps = {
      ...props,
      "aria-haspopup": "menu" as const,
      "aria-expanded": open,
      "data-state": open ? "open" : "closed",
      ref: composedRef,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
    }

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement

      return React.cloneElement(child, {
        ...sharedProps,
        className: cn(className, child.props?.className),
        "data-slot": child.props?.["data-slot"] ?? "dropdown-menu-trigger",
      })
    }

    return (
      <button
        type="button"
        data-slot="dropdown-menu-trigger"
        className={cn(className)}
        {...sharedProps}
      >
        {children}
      </button>
    )
  },
)

DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

type DropdownMenuContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end"
  sideOffset?: number
}

const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  (
    { align = "start", sideOffset = 4, className, style, children, ...props },
    forwardedRef,
  ) => {
    const { open, setOpen, triggerRef } = useDropdownMenuContext("DropdownMenuContent")
    const localRef = React.useRef<HTMLDivElement>(null)
    const composedRef = useComposedRefs(forwardedRef, localRef)

    React.useEffect(() => {
      if (!open) {
        return
      }

      const handlePointerDown = (event: PointerEvent) => {
        const target = event.target as Node

        if (
          !localRef.current?.contains(target) &&
          !triggerRef.current?.contains(target as Node)
        ) {
          setOpen(false)
        }
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false)
        }
      }

      document.addEventListener("pointerdown", handlePointerDown)
      document.addEventListener("keydown", handleKeyDown)

      return () => {
        document.removeEventListener("pointerdown", handlePointerDown)
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [open, setOpen, triggerRef])

    React.useEffect(() => {
      if (!open) {
        return
      }

      const firstItem = localRef.current?.querySelector<HTMLElement>(
        "[data-dropdown-menu-item]",
      )
      firstItem?.focus({ preventScroll: true })
    }, [open])

    if (!open) {
      return null
    }

    const alignmentStyles: React.CSSProperties = {}

    if (align === "end") {
      alignmentStyles.right = 0
    } else if (align === "center") {
      alignmentStyles.left = "50%"
      alignmentStyles.transform = "translateX(-50%)"
    } else {
      alignmentStyles.left = 0
    }

    return (
      <div
        ref={composedRef}
        role="menu"
        tabIndex={-1}
        data-slot="dropdown-menu-content"
        data-side="bottom"
        data-state="open"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className,
        )}
        style={{
          position: "absolute",
          top: `calc(100% + ${sideOffset}px)`,
          ...alignmentStyles,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)

DropdownMenuContent.displayName = "DropdownMenuContent"

type DropdownMenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inset?: boolean
  variant?: "default" | "destructive"
}

const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  (
    { className, inset, variant = "default", onClick, onKeyDown, ...props },
    forwardedRef,
  ) => {
    const { setOpen } = useDropdownMenuContext("DropdownMenuItem")

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
      onClick?.(event)

      if (!event.defaultPrevented) {
        setOpen(false)
      }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
      onKeyDown?.(event)

      if (event.defaultPrevented) {
        return
      }

      if (event.key === "Escape") {
        setOpen(false)
        return
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        event.currentTarget.click()
      }
    }

    return (
      <button
        ref={forwardedRef}
        type="button"
        role="menuitem"
        tabIndex={-1}
        data-slot="dropdown-menu-item"
        data-inset={inset}
        data-variant={variant}
        className={cn(
          "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
          className,
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      />
    )
  },
)

DropdownMenuItem.displayName = "DropdownMenuItem"

function useComposedRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return React.useCallback(
    (node: T) => {
      for (const ref of refs) {
        if (!ref) continue

        if (typeof ref === "function") {
          ref(node)
        } else {
          try {
            ;(ref as React.MutableRefObject<T | null>).current = node
          } catch {
            // no-op
          }
        }
      }
    },
    [refs],
  )
}

export { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger }
