"use client"

export default function Loader() {
    const css = `
      .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #fff;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        margin: 18px 12px 12px 12px;
      }
  
      @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
      } 
    `;
    return (
      <div>
        <style>{css}</style>
        <span className="loader"></span>
      </div>
    )
}