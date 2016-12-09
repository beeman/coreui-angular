export declare class NavDropdownDirective {
    private _open;
    /**
     * Checks if the dropdown menu is open or not.
     */
    isOpen(): any;
    /**
     * Opens the dropdown menu.
     */
    open(): void;
    /**
     * Closes the dropdown menu .
     */
    close(): void;
    /**
     * Toggles the dropdown menu.
     */
    toggle(): void;
}
/**
 * Allows the dropdown to be toggled via click.
 */
export declare class NavDropdownToggleDirective {
    private dropdown;
    constructor(dropdown: NavDropdownDirective);
    toggleOpen($event: any): void;
}
