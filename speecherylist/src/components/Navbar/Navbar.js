import React from "react";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1.8vw",
        marginLeft: "3vw",
        marginRight: "3vw",
        color: "white",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "500",
      }}
    >
      <div
        className="icon"
        style={{ display: "flex", marginTop: "auto", marginBottom: "auto" }}
      >
        <svg
          id="Line"
          enable-background="new 0 0 32 32"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          fill="CurrentColor"
        >
          <path
            id="XMLID_91_"
            d="m23 15c0 .552-.448 1-1 1v3c0 3.309-2.691 6-6 6s-6-2.691-6-6v-3c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1v3c0 2.206 1.794 4 4 4s4-1.794 4-4v-3c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z"
          />
          <path
            id="XMLID_1029_"
            d="m26.937 5.65c-.096-.256-.292-.461-.542-.569l-7-3c-.487-.209-1.052-.001-1.289.472l-2.514 5.029c-.864-4.517-2.887-5.582-4.592-5.582-2.715 0-4.48 2.902-4.909 8h-1.091c-.285 0-.556.121-.745.333-.19.212-.28.495-.249.777l1.703 15.331c.226 2.029 1.935 3.559 3.976 3.559h12.63c2.042 0 3.75-1.53 3.975-3.559l1.704-15.331c.032-.283-.059-.565-.249-.777-.189-.212-.46-.333-.745-.333h-1.823l1.723-3.565c.119-.246.132-.53.037-.785zm-7.464-1.359 5.172 2.216-1.689 3.493h-6.338zm-8.473-.291c1.511 0 2.572 2.221 2.904 6h-5.806c.338-3.68 1.44-6 2.902-6zm14.883 8-1.581 14.221c-.112 1.014-.967 1.779-1.987 1.779h-12.63c-1.021 0-1.875-.765-1.988-1.779l-1.58-14.221z"
          />
        </svg>
        <div
          className="title"
          style={{
            margin: "auto",
            marginLeft: "0.5vw",
            fontWeight: "600",
            fontSize: "1.3rem",
            marginTop: "0.2rem",
          }}
        >
          Speechery List
        </div>
      </div>
      <div className="menu" style={{ display: "flex" }}>
        <div
          className="menu-item"
          style={{
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: "1.2rem",
          }}
        >
          Food
        </div>
        <div
          className="menu-item"
          style={{
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: "1.2rem",
          }}
        >
          Household
        </div>
        <div
          className="menu-item"
          style={{
            marginLeft: "2vw",
            marginRight: "2vw",
            marginTop: "auto",
            marginBottom: "auto",
            fontSize: "1.2rem",
          }}
        >
          Snacks
        </div>
      </div>
      <div
        className="interactive"
        style={{ display: "flex", marginTop: "0.3rem" }}
      >
        <div
          className="shopping-cart"
          style={{
            marginLeft: "1.5vw",
            marginRight: "1.5vw",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <svg
            id="Capa_1"
            enable-background="new 0 0 512 512"
            height="28"
            viewBox="0 0 512 512"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
            fill="CurrentColor"
          >
            <g>
              <path d="m15 76h64.599c2.362 8.502 68.818 247.745 71.949 259.015 1.803 6.492 7.714 10.985 14.452 10.985h270c6.673 0 12.543-4.408 14.405-10.816l61-210c1.316-4.531.423-9.417-2.41-13.191s-7.277-5.993-11.995-5.993h-377.932l-13.615-49.015c-1.804-6.492-7.715-10.985-14.453-10.985h-76c-8.284 0-15 6.716-15 15s6.716 15 15 15zm462.023 60-52.286 180h-247.336l-50-180z" />
              <path d="m256 421c0-24.813-20.187-45-45-45s-45 20.187-45 45 20.187 45 45 45 45-20.187 45-45zm-60 0c0-8.271 6.729-15 15-15s15 6.729 15 15-6.729 15-15 15-15-6.729-15-15z" />
              <path d="m436 421c0-24.813-20.187-45-45-45s-45 20.187-45 45 20.187 45 45 45 45-20.187 45-45zm-60 0c0-8.271 6.729-15 15-15s15 6.729 15 15-6.729 15-15 15-15-6.729-15-15z" />
              <path d="m196 226h210c8.284 0 15-6.716 15-15s-6.716-15-15-15h-210c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
              <path d="m376 256h-150c-8.284 0-15 6.716-15 15s6.716 15 15 15h150c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
            </g>
          </svg>
        </div>
        <div
          className="profile"
          style={{
            marginLeft: "1.5vw",
            marginRight: "1.5vw",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 22 28"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="User">
              <g id="User_2">
                <g id="Group 5">
                  <path
                    id="Union"
                    clip-rule="evenodd"
                    d="m11 0c-3.31371 0-6 2.68629-6 6s2.68629 6 6 6c3.3137 0 6-2.68629 6-6s-2.6863-6-6-6zm-4 6c0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4s-1.7909 4-4 4c-2.20914 0-4-1.79086-4-4zm14 22c.2652 0 .5196-.1054.7071-.2929s.2929-.4419.2929-.7071v-7c0-3.3137-2.6863-6-6-6h-10c-3.31371 0-6 2.6863-6 6v7c0 .5523.447716 1 1 1zm-1-8v6h-18v-6c0-2.2091 1.79086-4 4-4h10c2.2091 0 4 1.7909 4 4z"
                    fill="CurrentColor"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div
          className="settings"
          style={{
            marginLeft: "1.5vw",
            marginRight: "1.5vw",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <svg
            id="Layer_1"
            enable-background="new 0 0 64 64"
            height="28"
            viewBox="0 0 64 64"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(-1,1)"
            fill="CurrentColor"
          >
            <g>
              <g>
                <g>
                  <path d="m59.5 18.5h-55c-1.1 0-2-.9-2-2s.9-2 2-2h55c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path d="m32.5 34.5h-28c-1.1 0-2-.9-2-2s.9-2 2-2h28c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </g>
              </g>
            </g>
            <g>
              <g>
                <g>
                  <path d="m59.5 50.5h-55c-1.1 0-2-.9-2-2s.9-2 2-2h55c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
