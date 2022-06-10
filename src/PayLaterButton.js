const template = document.createElement("template");

const makeTemplate = (elem) => {
    const height = elem.getAttribute("height")
        ? elem.getAttribute("height") - 16
        : 17;
    const darkMode = elem.getAttribute("darkMode");
    template.innerHTML = `
    <style>
        button {
            background: ${darkMode ? "#FCFCFD" : "#2E3192"};
            padding: 8px 16px;
            border: none;
            outline: 0;
            border-radius: 50em;
            margin: 1rem 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        button:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    </style>
    <button type="button">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width=${(height / 17) * 135}
            height=${height}
            viewBox="0 0 135 17"
        >
            <path
                d="M63.72,11.19l1.17,2.5,2.7-5.84h-.74l-2,4.23L64.1,10.4l1.21-2.56h-.75l-.83,1.77-.8-1.75h-.75l1.18,2.53-.81,1.69-2-4.24H59.8l2.74,5.84Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M68,6.43a.57.57,0,0,0,.17.41h0a.57.57,0,0,0,.4.16.55.55,0,0,0,.4-.16.58.58,0,0,0,.18-.41.58.58,0,0,0-.58-.56.57.57,0,0,0-.4.16h0A.56.56,0,0,0,68,6.43Z"
                fill=${darkMode ? "#fcfcfd" : "#2e3192"}
                fill-rule="evenodd"
            />
            <path
                d="M68.9,13.33V7.84h-.71v5.49Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M72.27,13.4h.18v-.67h-.18a1.44,1.44,0,0,1-1-.37,1.41,1.41,0,0,1-.39-1.07V8.5h1.57V7.84H70.86V5.77h-.71v5.52a2,2,0,0,0,.6,1.54h0A2.19,2.19,0,0,0,72.27,13.4Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M73.77,4.4h-.71v8.93h.71V10.16a1.73,1.73,0,0,1,.24-.9h0a1.63,1.63,0,0,1,.66-.64h0a1.83,1.83,0,0,1,.92-.24,1.62,1.62,0,0,1,1.27.47h0a1.78,1.78,0,0,1,.45,1.32v3.17H78V10.16a2.45,2.45,0,0,0-.64-1.8,2.41,2.41,0,0,0-1.8-.65,2.39,2.39,0,0,0-1.26.37,2.45,2.45,0,0,0-.56.43Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M1.46.68H.54V13.49H1.86V9.11a4.17,4.17,0,0,0,1.89-.52h0A4,4,0,0,0,5.3,7.05h0a4.63,4.63,0,0,0,.56-2.27,3.92,3.92,0,0,0-1.18-3A4.51,4.51,0,0,0,1.46.68ZM4.54,4.8a3,3,0,0,1-.81,2.27,2.83,2.83,0,0,1-1.87.78V2a2.86,2.86,0,0,1,1.92.73h0A2.72,2.72,0,0,1,4.54,4.8ZM5.63,9.49a4.08,4.08,0,0,0,.57,2.09h0A4.16,4.16,0,0,0,7.74,13.1a4.1,4.1,0,0,0,2.11.57A4.2,4.2,0,0,0,12,13.09h0a3.92,3.92,0,0,0,.74-.57v1H14v-8H12.71v1A3.63,3.63,0,0,0,12,5.93a4.15,4.15,0,0,0-4.28,0A4.19,4.19,0,0,0,6.2,7.41,4,4,0,0,0,5.63,9.49ZM12.35,11a2.91,2.91,0,0,1-1,1.07,2.71,2.71,0,0,1-1.42.39A2.84,2.84,0,0,1,8.43,12,3.31,3.31,0,0,1,7.34,11a2.87,2.87,0,0,1,0-2.89A3.34,3.34,0,0,1,8.42,7a2.75,2.75,0,0,1,1.44-.4,2.66,2.66,0,0,1,1.43.4h0A2.94,2.94,0,0,1,12.35,8a2.85,2.85,0,0,1,0,2.91Zm3.21,1.84v2.34l.09.11a3.85,3.85,0,0,0,3.15,1.43,3.88,3.88,0,0,0,2-.5,3.35,3.35,0,0,0,1.29-1.4,4.16,4.16,0,0,0,.44-1.91V5.49H21.22v4.59a2.22,2.22,0,0,1-.33,1.16h0a2.53,2.53,0,0,1-.88.87,2.47,2.47,0,0,1-1.23.31,2.27,2.27,0,0,1-1.1-.27,2.09,2.09,0,0,1-.81-.78,2.62,2.62,0,0,1-.3-1.29V5.49H15.26v4.59a3.92,3.92,0,0,0,.43,1.86h0A3.37,3.37,0,0,0,17,13.22a3.69,3.69,0,0,0,1.82.45,3.93,3.93,0,0,0,1.86-.45h0a3.27,3.27,0,0,0,.58-.39v.09a2.7,2.7,0,0,1-.3,1.29h0a2.1,2.1,0,0,1-.83.89h0a2.48,2.48,0,0,1-1.35.33,2.51,2.51,0,0,1-1.35-.35h0A3.42,3.42,0,0,1,16.3,14ZM25.34.68H24V13.49h5V12.23H25.34Zm4.59,10.9h0a4.21,4.21,0,0,0,1.53,1.52,4.13,4.13,0,0,0,2.11.57,4.21,4.21,0,0,0,2.13-.58h0a4.69,4.69,0,0,0,.74-.57v1h1.31v-8H36.44v1a4,4,0,0,0-.69-.51,4.2,4.2,0,0,0-5.82,1.48,4,4,0,0,0-.57,2.08A4.08,4.08,0,0,0,29.93,11.58ZM36.08,11A3.07,3.07,0,0,1,35,12a2.74,2.74,0,0,1-1.43.39A2.83,2.83,0,0,1,32.16,12,3.34,3.34,0,0,1,31.06,11a2.83,2.83,0,0,1-.39-1.44,2.76,2.76,0,0,1,.4-1.45A3.16,3.16,0,0,1,32.15,7a2.75,2.75,0,0,1,1.44-.4A2.65,2.65,0,0,1,35,7h0A3,3,0,0,1,36.08,8a2.91,2.91,0,0,1,0,2.91Zm6,2.63h.4V12.34h-.4a1.7,1.7,0,0,1-1.82-1.86V6.74h2.21V5.49H40.3V2.59H39v7.89a3,3,0,0,0,.9,2.28h0A3.21,3.21,0,0,0,42.12,13.59Zm8.26-1.4V9.89L49.65,11a3.4,3.4,0,0,1-1.11,1.06,2.82,2.82,0,0,1-1.39.38,2.59,2.59,0,0,1-1-.17,2.43,2.43,0,0,1-.56-.31l5-4.9-.25-.29A4.06,4.06,0,0,0,47.2,5.33,4.59,4.59,0,0,0,45,5.85h0a4,4,0,0,0-1.55,1.49,4,4,0,0,0-.56,2.12,4.13,4.13,0,0,0,.56,2.08h0A4.54,4.54,0,0,0,45,13.1h0a4,4,0,0,0,2.08.59,4.7,4.7,0,0,0,1.75-.32h0a4.13,4.13,0,0,0,1.43-1.07ZM48.22,6.76a2.7,2.7,0,0,1,.57.31l-4.06,4a2.85,2.85,0,0,1-.51-1.68A2.85,2.85,0,0,1,44.6,8a2.61,2.61,0,0,1,1-1h0a3.12,3.12,0,0,1,1.55-.38,2.73,2.73,0,0,1,1,.17Zm4.5-1.27H51.41v8h1.31V8.88A2.24,2.24,0,0,1,53,7.81a2.27,2.27,0,0,1,.73-.8,1.65,1.65,0,0,1,.9-.29,1.29,1.29,0,0,1,.8.27l.65.49V5.81l-.25-.1a3,3,0,0,0-1.16-.24A2.77,2.77,0,0,0,53,6h0a2.17,2.17,0,0,0-.29.24Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M89.91,13.61h-.35A3.2,3.2,0,0,1,88,13.23h0a3.08,3.08,0,0,1-1.55-2.72V.73a0,0,0,0,1,.05,0h1.2a0,0,0,0,1,.05,0v9.78a1.8,1.8,0,0,0,.89,1.62,1.79,1.79,0,0,0,.91.24h.35a0,0,0,0,1,0,.05v1.14A0,0,0,0,1,89.91,13.61Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
            />
            <path
                d="M97.38,12.15a0,0,0,0,1,0,0l-.09.1a4,4,0,0,1-1.42,1.06h0a4.61,4.61,0,0,1-1.74.31,3.88,3.88,0,0,1-2.05-.58h0a4.48,4.48,0,0,1-1.51-1.55h0a4.18,4.18,0,0,1,0-4.2,3.93,3.93,0,0,1,1.52-1.48h0a4.52,4.52,0,0,1,2.15-.52,4,4,0,0,1,3.1,1.44l.22.25a0,0,0,0,1,0,.07L92.71,11.9a.06.06,0,0,0,0,.08,4.27,4.27,0,0,0,.51.27,2.53,2.53,0,0,0,1,.17A2.75,2.75,0,0,0,95.56,12,3.37,3.37,0,0,0,96.66,11l.63-1a0,0,0,0,1,.09,0ZM95.77,7.1a0,0,0,0,0,0-.07,2.18,2.18,0,0,0-.51-.28h0a2.7,2.7,0,0,0-1-.18,3,3,0,0,0-1.53.38h0a2.65,2.65,0,0,0-1,1,3.06,3.06,0,0,0,.1,3.09.05.05,0,0,0,.08,0Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M99.52,5.53a0,0,0,0,0,0,0h-1.2a.05.05,0,0,0,0,0v7.89a.05.05,0,0,0,0,.05h1.2a0,0,0,0,0,0-.05V9a2.43,2.43,0,0,1,.34-1.27,2.51,2.51,0,0,1,.94-.89h0a2.76,2.76,0,0,1,1.33-.33,1.75,1.75,0,0,1,1.44.58h0a2.56,2.56,0,0,1,.53,1.75v4.54a0,0,0,0,0,0,.05h1.2a0,0,0,0,0,0-.05V8.88a3.69,3.69,0,0,0-.88-2.6,3.06,3.06,0,0,0-2.37-1,4,4,0,0,0-2,.55,3.7,3.7,0,0,0-.5.35.05.05,0,0,1-.09,0Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
            />
            <path
                d="M108.26,13.08a4.37,4.37,0,0,1-1.5-1.52,4.06,4.06,0,0,1-.56-2.09,4.12,4.12,0,0,1,.56-2.09,4.34,4.34,0,0,1,1.5-1.51h0a4,4,0,0,1,2.1-.57,3.93,3.93,0,0,1,2.09.6,3.49,3.49,0,0,1,.65.47.06.06,0,0,0,.09,0V.73a0,0,0,0,1,0,0h1.2a.05.05,0,0,1,0,0V13.42a.05.05,0,0,1,0,.05h-1.2a0,0,0,0,1,0-.05V12.6a.05.05,0,0,0-.09,0,3.8,3.8,0,0,1-.69.5,4,4,0,0,1-2,.59,4,4,0,0,1-2.1-.57Zm3.5-1.07a3.16,3.16,0,0,0,1.07-1.08h0a2.79,2.79,0,0,0,0-2.88h0A3.07,3.07,0,0,0,111.76,7h0a2.69,2.69,0,0,0-2.82,0h0a3,3,0,0,0-1.44,2.51,3,3,0,0,0,.38,1.47,3.22,3.22,0,0,0,1,1.07,2.8,2.8,0,0,0,1.43.39A2.67,2.67,0,0,0,111.76,12Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M116,4.35h0a1,1,0,0,0,.67.26.89.89,0,0,0,.65-.27.94.94,0,0,0,.3-.69.88.88,0,0,0-.3-.67.89.89,0,0,0-.65-.27,1,1,0,0,0-.67.26h0a1,1,0,0,0,0,1.35Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
            />
            <path
                d="M116.07,5.53a0,0,0,0,1,.05,0h1.19a0,0,0,0,1,0,0v7.89a0,0,0,0,1,0,.05h-1.19a0,0,0,0,1-.05-.05Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
            />
            <path
                d="M120.59,13.13h0a4.11,4.11,0,0,0,2.09.55,4.27,4.27,0,0,0,1.71-.32h0a4.08,4.08,0,0,0,1.07-.69l0,0v-2a.05.05,0,0,0-.1,0l-.21.33a2.82,2.82,0,0,1-2.49,1.43,3,3,0,0,1-1.43-.36,2.88,2.88,0,0,1-1-1,3,3,0,0,1-.39-1.52,2.72,2.72,0,0,1,.4-1.44A2.94,2.94,0,0,1,121.3,7h0a2.73,2.73,0,0,1,1.45-.41,2.46,2.46,0,0,1,1.36.35h0a3.42,3.42,0,0,1,1,1.06l.21.32a.06.06,0,0,0,.1,0V6.37l0,0a4.32,4.32,0,0,0-1-.67,4.06,4.06,0,0,0-1.68-.33,4.22,4.22,0,0,0-2.15.57h0a4.23,4.23,0,0,0-1.52,1.51,4,4,0,0,0-.56,2.06,4.12,4.12,0,0,0,2.07,3.66Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
            />
            <path
                d="M126.66,11.56h0a4.14,4.14,0,0,1-.56-2.09,4.07,4.07,0,0,1,.56-2.07,4.29,4.29,0,0,1,1.52-1.53,4.08,4.08,0,0,1,4.24,0,4.25,4.25,0,0,1,.59.43.05.05,0,0,0,.09,0V5.53a0,0,0,0,1,0,0h1.2a0,0,0,0,1,0,0v7.89a0,0,0,0,1,0,.05h-1.2a0,0,0,0,1,0-.05v-.8a.06.06,0,0,0-.09,0,3.82,3.82,0,0,1-.64.48h0a4.07,4.07,0,0,1-4.19,0A4.15,4.15,0,0,1,126.66,11.56Zm5,.45a2.93,2.93,0,0,0,1-1.07h0a2.89,2.89,0,0,0,.39-1.47A3,3,0,0,0,131.68,7h0a2.62,2.62,0,0,0-1.41-.4,2.68,2.68,0,0,0-1.42.4,3.22,3.22,0,0,0-1.07,1.1,2.85,2.85,0,0,0,0,2.88A3.28,3.28,0,0,0,128.86,12a2.8,2.8,0,0,0,1.43.39A2.7,2.7,0,0,0,131.7,12Z"
                fill=${darkMode ? "#2e3192" : "#fcfcfd"}
                fill-rule="evenodd"
            />
            <path
                d="M85.57,12.34A1.33,1.33,0,1,1,84.24,11,1.34,1.34,0,0,1,85.57,12.34Z"
                fill="#ed7a56"
            />
        </svg>
    </button>
 `;
};

class PayLaterButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        makeTemplate(this);
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["height", "darkMode"];
    }
}

window.customElements.define("paylater-button", PayLaterButton);
