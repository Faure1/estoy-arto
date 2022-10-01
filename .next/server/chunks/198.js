"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer.js




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
        fluid: true,
        className: "footer-bg ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
            className: "footer-container ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Col, {
                    xs: 3,
                    className: "d-flex flex-column justify-content-center ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                            alt: "Logo",
                            src: "/assets/logo.png",
                            width: 80,
                            height: 80,
                            layout: "responsive"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "zondar.co",
                            children: "@zondar"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                    xs: 9,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Row, {
                        className: "footer-links",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://instagram.com/proyectozondar?igshid=YmMyMTA2M2Y=",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Instagram"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Youtube"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Twitter"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Col, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: "Facebook"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(1937);
// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(4678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__(5226);
// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__(2540);
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__(4934);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);
// EXTERNAL MODULE: external "react-bootstrap/NavDropdown"
var NavDropdown_ = __webpack_require__(9070);
// EXTERNAL MODULE: external "react-bootstrap/Offcanvas"
var Offcanvas_ = __webpack_require__(6865);
var Offcanvas_default = /*#__PURE__*/__webpack_require__.n(Offcanvas_);
// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(271);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);
;// CONCATENATED MODULE: ./components/NavBarComponent.js










const NavBarComponent = ()=>{
    const Aviso = ()=>{
        external_sweetalert2_default().fire({
            icon: "warning",
            title: "Uuups",
            text: "Pagina en contrucci\xf3n"
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
        expand: false,
        className: "mb-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            fluid: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Brand, {
                    className: "d-flex align-items-center",
                    id: "titutlo-nav",
                    href: "#",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                            alt: "Logo",
                            src: "/assets/logo.png",
                            width: 80,
                            height: 80,
                            layout: "responsive"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: "letra-nav",
                            children: "Zondar"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                    id: "boton-nav",
                    "aria-controls": `offcanvasNavbar-expand-false`
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Offcanvas, {
                    id: `offcanvasNavbar-expand-false`,
                    "aria-labelledby": `offcanvasNavbarLabel-expand-false`,
                    placement: "end",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Header, {
                            closeButton: true,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Offcanvas_default()).Title, {
                                className: "d-flex align-items-center",
                                id: `offcanvasNavbarLabel-expand-false`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Image, {
                                        alt: "Logo",
                                        src: "/assets/logo.png",
                                        width: 80,
                                        height: 80,
                                        layout: "responsive"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        className: "letra-nav ",
                                        children: "Zondar"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Offcanvas_default()).Body, {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Nav_default()), {
                                className: "justify-content-end flex-grow-1 pe-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                        onClick: Aviso,
                                        className: "letra-nav text-white",
                                        href: "#action1",
                                        children: "SOBRE NOSOTROS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                        className: "letra-nav text-white",
                                        href: "/galeria",
                                        children: "GALER\xcdA"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Nav_default()).Link, {
                                        onClick: Aviso,
                                        className: "letra-nav text-white",
                                        href: "#action2",
                                        children: "CONT\xc1CTANOS"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }, false);
};
/* harmony default export */ const components_NavBarComponent = (NavBarComponent);

;// CONCATENATED MODULE: ./components/Layout/Layout.js





const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Zondar \uD83C\uDDE6\uD83C\uDDF7 | Argentina"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Pagina oficial de proyecto Zondar el cual se basa en mandar una sonda a la atmosfera la cual sea reutilizable"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "sonda,metereolog\xeda,clima,argentina,iresm"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Lautaro Faure, Julian Murno, Santiago Faginoli, Nico Pereyra"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "./assets/logo.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_NavBarComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "container-main",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);


/***/ })

};
;