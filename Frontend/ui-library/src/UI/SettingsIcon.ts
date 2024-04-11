// Copyright Epic Games, Inc. All Rights Reserved.

/**
 * Settings icon that can be clicked.
 */
export class SettingsIcon {
    _rootElement: HTMLButtonElement;
    _settingsIcon: SVGElement;
    _tooltipText: HTMLElement;

    /**
     * Get the the button containing the settings icon.
     */
    public get rootElement(): HTMLButtonElement {
        if (!this._rootElement) {
            this._rootElement = document.createElement('button');
            this._rootElement.type = 'button';
            this._rootElement.classList.add('UiTool');
            this._rootElement.id = 'settingsBtn';
            this._rootElement.appendChild(this.settingsIcon);
            this._rootElement.appendChild(this.tooltipText);
        }
        return this._rootElement;
    }

    public get tooltipText(): HTMLElement {
        if (!this._tooltipText) {
            this._tooltipText = document.createElement('span');
            this._tooltipText.classList.add('tooltiptext');
            this._tooltipText.innerHTML = 'Settings';
        }
        return this._tooltipText;
    }

    public get settingsIcon(): SVGElement {
        if (!this._settingsIcon) {
            this._settingsIcon = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'svg'
            );
            this._settingsIcon.setAttributeNS(null, 'id', 'settingsIcon');
            this._settingsIcon.setAttributeNS(
                null,
                'viewBox',
                '0 0 24 24'
            );
            this._settingsIcon.setAttributeNS(
                null,
                'width',
                '22'
            );

            // create svg group for the paths
            const svgGroup = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'g'
            );
            svgGroup.classList.add('svgIcon');
            this._settingsIcon.appendChild(svgGroup);

            // create paths for the icon itself, the inner and out path of a cog
            const path1 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );
            path1.setAttributeNS(
                null,
                'd',
                'M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm8.42-.6-.5-.29a7.74,7.74,0,0,0,0-2.22l.5-.29a2,2,0,0,0,.73-2.74l-1-1.72a2.06,2.06,0,0,0-2.73-.74l-.53.31A8.07,8.07,0,0,0,15,4.6V4a2,2,0,0,0-2-2H11A2,2,0,0,0,9,4v.6A8.07,8.07,0,0,0,7.1,5.71L6.57,5.4a2.07,2.07,0,0,0-2.73.73l-1,1.73a2,2,0,0,0,.73,2.74l.5.29a7.74,7.74,0,0,0,0,2.22l-.5.29a2,2,0,0,0-.73,2.74l1,1.73a2.05,2.05,0,0,0,2.72.73l.53-.31A8.07,8.07,0,0,0,9,19.4V20a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2v-.6a8.07,8.07,0,0,0,1.9-1.11l.53.31a2.07,2.07,0,0,0,2.73-.73l1-1.73A2,2,0,0,0,20.42,13.4Zm-2.59-2.78A5.86,5.86,0,0,1,18,12a5.92,5.92,0,0,1-.17,1.38,1,1,0,0,0,.47,1.11l1.12.64-1,1.73-1.15-.66a1,1,0,0,0-1.19.15,6.05,6.05,0,0,1-2.38,1.39,1,1,0,0,0-.71,1V20H11V18.7a1,1,0,0,0-.71-1,6.05,6.05,0,0,1-2.38-1.39,1,1,0,0,0-.69-.28,1,1,0,0,0-.5.13l-1.14.67-1-1.73,1.12-.65a1,1,0,0,0,.47-1.11A5.92,5.92,0,0,1,6,12a5.86,5.86,0,0,1,.17-1.38A1,1,0,0,0,5.7,9.51L4.58,8.86l1-1.73,1.15.67a1,1,0,0,0,1.19-.15,6.05,6.05,0,0,1,2.38-1.39,1,1,0,0,0,.71-1V4h2V5.3a1,1,0,0,0,.71,1,6.05,6.05,0,0,1,2.38,1.39,1,1,0,0,0,1.19.15l1.14-.66,1,1.73-1.12.64A1,1,0,0,0,17.83,10.62Z'
            );

            const path2 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );
            path2.setAttributeNS(
                null,
                'd',
                'M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z'
            );

            svgGroup.appendChild(path1);
            svgGroup.appendChild(path2);
        }
        return this._settingsIcon;
    }
}
