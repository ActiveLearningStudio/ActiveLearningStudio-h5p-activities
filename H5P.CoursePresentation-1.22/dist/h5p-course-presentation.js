!(function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = (n[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    var n = {};
    (t.m = e),
        (t.c = n),
        (t.d = function (e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
        }),
        (t.n = function (e) {
            var n =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 6));
})([
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        (t.jQuery = H5P.jQuery), (t.EventDispatcher = H5P.EventDispatcher), (t.JoubelUI = H5P.JoubelUI);
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.stripHTML = t.addClickAndKeyboardListeners = t.keyCode = t.defaultValue = t.contains = t.isIOS = t.isIPad = t.kebabCase = t.isFunction = t.flattenArray = void 0);
        var i = n(0),
            r =
                ((t.flattenArray = function (e) {
                    return e.concat.apply([], e);
                }),
                (t.isFunction = function (e) {
                    return "function" == typeof e;
                }),
                (t.kebabCase = function (e) {
                    return e.replace(/[\W]/g, "-");
                }),
                (t.isIPad = null !== navigator.userAgent.match(/iPad/i)),
                (t.isIOS = null !== navigator.userAgent.match(/iPad|iPod|iPhone/i)),
                (t.contains = function (e, t) {
                    return -1 !== e.indexOf(t);
                })),
            s =
                ((t.defaultValue = function (e, t) {
                    return void 0 !== e ? e : t;
                }),
                (t.keyCode = { ENTER: 13, ESC: 27, SPACE: 32 })),
            o =
                ((t.addClickAndKeyboardListeners = function (e, t, n) {
                    e.click(function (e) {
                        t.call(n || this, e);
                    }),
                        e.keydown(function (e) {
                            r([s.ENTER, s.SPACE], e.which) && (e.preventDefault(), t.call(n || this, e));
                        });
                }),
                (0, i.jQuery)("<div>"));
        t.stripHTML = function (e) {
            return o.html(e).text().trim();
        };
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            var n = this;
            s.call(n), (n.children = []);
            var i = function (e) {
                for (var t = e; t < n.children.length; t++) n.children[t].index = t;
            };
            if (
                ((n.addChild = function (t, s) {
                    void 0 === s && (s = n.children.length);
                    var o = new r(s, n);
                    return s === n.children.length ? n.children.push(o) : (n.children.splice(s, 0, o), i(s)), e.call(o, t), o;
                }),
                (n.removeChild = function (e) {
                    n.children.splice(e, 1), i(e);
                }),
                (n.moveChild = function (e, t) {
                    var r = n.children.splice(e, 1)[0];
                    n.children.splice(t, 0, r), i(t < e ? t : e);
                }),
                t)
            )
                for (var o = 0; o < t.length; o++) n.addChild(t[o]);
        }
        var r = n(15),
            s = H5P.EventDispatcher;
        (i.prototype = Object.create(s.prototype)), (i.prototype.constructor = i), (e.exports = i);
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                },
            s = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            o = n(19),
            a = n(4),
            l = n(20),
            d = (0, o.removeAttribute)("tabindex"),
            c = ((0, a.forEach)(d), (0, o.setAttribute)("tabindex", "0")),
            u = (0, o.setAttribute)("tabindex", "-1"),
            p = (0, o.hasAttribute)("tabindex"),
            h = (function () {
                function e(t) {
                    i(this, e),
                        r(this, (0, l.Eventful)()),
                        (this.plugins = t || []),
                        (this.elements = []),
                        (this.negativeTabIndexAllowed = !1),
                        this.on("nextElement", this.nextElement, this),
                        this.on("previousElement", this.previousElement, this),
                        this.on("firstElement", this.firstElement, this),
                        this.on("lastElement", this.lastElement, this),
                        this.initPlugins();
                }
                return (
                    s(e, [
                        {
                            key: "addElement",
                            value: function (e) {
                                this.elements.push(e), this.firesEvent("addElement", e), 1 === this.elements.length && this.setTabbable(e);
                            },
                        },
                        {
                            key: "insertElementAt",
                            value: function (e, t) {
                                this.elements.splice(t, 0, e), this.firesEvent("addElement", e), 1 === this.elements.length && this.setTabbable(e);
                            },
                        },
                        {
                            key: "removeElement",
                            value: function (e) {
                                (this.elements = (0, a.without)([e], this.elements)), p(e) && (this.setUntabbable(e), this.elements[0] && this.setTabbable(this.elements[0])), this.firesEvent("removeElement", e);
                            },
                        },
                        {
                            key: "count",
                            value: function () {
                                return this.elements.length;
                            },
                        },
                        {
                            key: "firesEvent",
                            value: function (e, t) {
                                var n = this.elements.indexOf(t);
                                return this.fire(e, { element: t, index: n, elements: this.elements, oldElement: this.tabbableElement });
                            },
                        },
                        {
                            key: "nextElement",
                            value: function (e) {
                                var t = e.index,
                                    n = t === this.elements.length - 1,
                                    i = this.elements[n ? 0 : t + 1];
                                this.setTabbable(i), i.focus();
                            },
                        },
                        {
                            key: "firstElement",
                            value: function () {
                                var e = this.elements[0];
                                this.setTabbable(e), e.focus();
                            },
                        },
                        {
                            key: "lastElement",
                            value: function () {
                                var e = this.elements[this.elements.length - 1];
                                this.setTabbable(e), e.focus();
                            },
                        },
                        {
                            key: "setTabbableByIndex",
                            value: function (e) {
                                var t = this.elements[e];
                                t && this.setTabbable(t);
                            },
                        },
                        {
                            key: "setTabbable",
                            value: function (e) {
                                (0, a.forEach)(this.setUntabbable.bind(this), this.elements), c(e), (this.tabbableElement = e);
                            },
                        },
                        {
                            key: "setUntabbable",
                            value: function (e) {
                                e !== document.activeElement && (this.negativeTabIndexAllowed ? u(e) : d(e));
                            },
                        },
                        {
                            key: "previousElement",
                            value: function (e) {
                                var t = e.index,
                                    n = 0 === t,
                                    i = this.elements[n ? this.elements.length - 1 : t - 1];
                                this.setTabbable(i), i.focus();
                            },
                        },
                        {
                            key: "useNegativeTabIndex",
                            value: function () {
                                (this.negativeTabIndexAllowed = !0),
                                    this.elements.forEach(function (e) {
                                        e.hasAttribute("tabindex") || u(e);
                                    });
                            },
                        },
                        {
                            key: "initPlugins",
                            value: function () {
                                this.plugins.forEach(function (e) {
                                    void 0 !== e.init && e.init(this);
                                }, this);
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = h;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = (t.curry = function (e) {
                var t = e.length;
                return function n() {
                    var i = Array.prototype.slice.call(arguments, 0);
                    return i.length >= t
                        ? e.apply(null, i)
                        : function () {
                              var e = Array.prototype.slice.call(arguments, 0);
                              return n.apply(null, i.concat(e));
                          };
                };
            }),
            r =
                ((t.compose = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce(function (e, t) {
                        return function () {
                            return e(t.apply(void 0, arguments));
                        };
                    });
                }),
                (t.forEach = i(function (e, t) {
                    t.forEach(e);
                })),
                (t.map = i(function (e, t) {
                    return t.map(e);
                })),
                (t.filter = i(function (e, t) {
                    return t.filter(e);
                }))),
            s =
                ((t.some = i(function (e, t) {
                    return t.some(e);
                })),
                (t.contains = i(function (e, t) {
                    return -1 != t.indexOf(e);
                })));
        (t.without = i(function (e, t) {
            return r(function (t) {
                return !s(t, e);
            }, t);
        })),
            (t.inverseBooleanString = function (e) {
                return ("true" !== e).toString();
            });
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            s = (function () {
                function e() {
                    i(this, e), (this.selectability = !0);
                }
                return (
                    r(e, [
                        {
                            key: "init",
                            value: function (e) {
                                (this.boundHandleKeyDown = this.handleKeyDown.bind(this)),
                                    (this.controls = e),
                                    this.controls.on("addElement", this.listenForKeyDown, this),
                                    this.controls.on("removeElement", this.removeKeyDownListener, this);
                            },
                        },
                        {
                            key: "listenForKeyDown",
                            value: function (e) {
                                e.element.addEventListener("keydown", this.boundHandleKeyDown);
                            },
                        },
                        {
                            key: "removeKeyDownListener",
                            value: function (e) {
                                e.element.removeEventListener("keydown", this.boundHandleKeyDown);
                            },
                        },
                        {
                            key: "handleKeyDown",
                            value: function (e) {
                                switch (e.which) {
                                    case 27:
                                        this.close(e.target), e.preventDefault(), e.stopPropagation();
                                        break;
                                    case 35:
                                        this.lastElement(e.target), e.preventDefault(), e.stopPropagation();
                                        break;
                                    case 36:
                                        this.firstElement(e.target), e.preventDefault(), e.stopPropagation();
                                        break;
                                    case 13:
                                    case 32:
                                        this.select(e.target), e.preventDefault(), e.stopPropagation();
                                        break;
                                    case 37:
                                    case 38:
                                        this.hasChromevoxModifiers(e) || (this.previousElement(e.target), e.preventDefault(), e.stopPropagation());
                                        break;
                                    case 39:
                                    case 40:
                                        this.hasChromevoxModifiers(e) || (this.nextElement(e.target), e.preventDefault(), e.stopPropagation());
                                }
                            },
                        },
                        {
                            key: "hasChromevoxModifiers",
                            value: function (e) {
                                return e.shiftKey || e.ctrlKey;
                            },
                        },
                        {
                            key: "previousElement",
                            value: function (e) {
                                !1 !== this.controls.firesEvent("beforePreviousElement", e) && (this.controls.firesEvent("previousElement", e), this.controls.firesEvent("afterPreviousElement", e));
                            },
                        },
                        {
                            key: "nextElement",
                            value: function (e) {
                                !1 !== this.controls.firesEvent("beforeNextElement", e) && (this.controls.firesEvent("nextElement", e), this.controls.firesEvent("afterNextElement", e));
                            },
                        },
                        {
                            key: "select",
                            value: function (e) {
                                this.selectability && !1 !== this.controls.firesEvent("before-select", e) && (this.controls.firesEvent("select", e), this.controls.firesEvent("after-select", e));
                            },
                        },
                        {
                            key: "firstElement",
                            value: function (e) {
                                !1 !== this.controls.firesEvent("beforeFirstElement", e) && (this.controls.firesEvent("firstElement", e), this.controls.firesEvent("afterFirstElement", e));
                            },
                        },
                        {
                            key: "lastElement",
                            value: function (e) {
                                !1 !== this.controls.firesEvent("beforeLastElement", e) && (this.controls.firesEvent("lastElement", e), this.controls.firesEvent("afterLastElement", e));
                            },
                        },
                        {
                            key: "disableSelectability",
                            value: function () {
                                this.selectability = !1;
                            },
                        },
                        {
                            key: "enableSelectability",
                            value: function () {
                                this.selectability = !0;
                            },
                        },
                        {
                            key: "close",
                            value: function (e) {
                                !1 !== this.controls.firesEvent("before-close", e) && (this.controls.firesEvent("close", e), this.controls.firesEvent("after-close", e));
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = s;
    },
    function (e, t, n) {
        "use strict";
        n(7), n(8), n(9), n(10), n(11), n(12), n(13);
        var i = n(14),
            r = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(i);
        (H5P = H5P || {}), (H5P.CoursePresentation = r.default);
    },
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t) {},
    function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
                function e(e, t) {
                    var n = [],
                        i = !0,
                        r = !1,
                        s = void 0;
                    try {
                        for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                    } catch (e) {
                        (r = !0), (s = e);
                    } finally {
                        try {
                            !i && a.return && a.return();
                        } finally {
                            if (r) throw s;
                        }
                    }
                    return n;
                }
                return function (t, n) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t)) return e(t, n);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                };
            })(),
            s =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      },
            o = n(2),
            a = i(o),
            l = n(16),
            d = i(l),
            c = n(17),
            u = i(c),
            p = n(21),
            h = i(p),
            f = n(22),
            v = i(f),
            m = n(0),
            y = n(1),
            b = n(23),
            g = i(b),
            S = function (e, t, n) {
                var i = this;
                (this.presentation = e.presentation),
                    (this.slides = this.presentation.slides),
                    (this.contentId = t),
                    (this.elementInstances = []),
                    (this.elementsAttached = []),
                    (this.slidesWithSolutions = []),
                    (this.hasAnswerElements = !1),
                    (this.ignoreResize = !1),
                    (this.isTask = !1),
                    n.cpEditor && (this.editor = n.cpEditor),
                    n && (this.previousState = n.previousState),
                    (this.currentSlideIndex = this.previousState && this.previousState.progress ? this.previousState.progress : 0),
                    (this.presentation.keywordListEnabled = void 0 === e.presentation.keywordListEnabled || e.presentation.keywordListEnabled),
                    (this.l10n = m.jQuery.extend(
                        {
                            slide: "Slide",
                            score: "Score",
                            yourScore: "Your score",
                            maxScore: "Max score",
                            total: "Total",
                            totalScore: "Total Score",
                            showSolutions: "Show solutions",
                            submitResult: "Submit Answers",
                            summary: "summary",
                            retry: "Retry",
                            exportAnswers: "Export text",
                            close: "Close",
                            hideKeywords: "Hide sidebar navigation menu",
                            showKeywords: "Show sidebar navigation menu",
                            fullscreen: "Fullscreen",
                            exitFullscreen: "Exit fullscreen",
                            prevSlide: "Previous slide",
                            nextSlide: "Next slide",
                            currentSlide: "Current slide",
                            lastSlide: "Last slide",
                            solutionModeTitle: "Exit solution mode",
                            solutionModeText: "Solution Mode",
                            summaryMultipleTaskText: "Multiple tasks",
                            scoreMessage: "You achieved:",
                            shareFacebook: "Share on Facebook",
                            shareTwitter: "Share on Twitter",
                            shareGoogle: "Share on Google+",
                            goToSlide: "Go to slide :num",
                            solutionsButtonTitle: "Show comments",
                            printTitle: "Print",
                            printIngress: "How would you like to print this presentation?",
                            printAllSlides: "Print all slides",
                            printCurrentSlide: "Print current slide",
                            noTitle: "No title",
                            accessibilitySlideNavigationExplanation: "Use left and right arrow to change slide in that direction whenever canvas is selected.",
                            containsNotCompleted: "@slideName contains not completed interaction",
                            containsCompleted: "@slideName contains completed interaction",
                            slideCount: "Slide @index of @total",
                            accessibilityCanvasLabel: "Presentation canvas. Use left and right arrow to move between slides.",
                            containsOnlyCorrect: "@slideName only has correct answers",
                            containsIncorrectAnswers: "@slideName has incorrect answers",
                            shareResult: "Share Result",
                            accessibilityTotalScore: "You got @score of @maxScore points in total",
                            accessibilityEnteredFullscreen: "Entered fullscreen",
                            accessibilityExitedFullscreen: "Exited fullscreen",
                        },
                        void 0 !== e.l10n ? e.l10n : {}
                    )),
                    e.override &&
                        ((this.activeSurface = !!e.override.activeSurface),
                        (this.hideSummarySlide = !!e.override.hideSummarySlide),
                        (this.enablePrintButton = !!e.override.enablePrintButton),
                        (this.showSummarySlideSolutionButton = void 0 === e.override.summarySlideSolutionButton || e.override.summarySlideSolutionButton),
                        (this.showSummarySlideRetryButton = void 0 === e.override.summarySlideRetryButton || e.override.summarySlideRetryButton),
                        e.override.social &&
                            ((this.enableTwitterShare = !!e.override.social.showTwitterShare),
                            (this.enableFacebookShare = !!e.override.social.showFacebookShare),
                            (this.enableGoogleShare = !!e.override.social.showGoogleShare),
                            (this.twitterShareStatement = e.override.social.twitterShare.statement),
                            (this.twitterShareHashtags = e.override.social.twitterShare.hashtags),
                            (this.twitterShareUrl = e.override.social.twitterShare.url),
                            (this.facebookShareUrl = e.override.social.facebookShare.url),
                            (this.facebookShareQuote = e.override.social.facebookShare.quote),
                            (this.googleShareUrl = e.override.social.googleShareUrl))),
                    (this.keywordMenu = new v.default({ l10n: this.l10n, currentIndex: void 0 !== this.previousState ? this.previousState.progress : 0 })),
                    this.setElementsOverride(e.override),
                    a.default.call(this, g.default, e.presentation.slides),
                    this.on("resize", this.resize, this),
                    this.on("printing", function (e) {
                        (i.ignoreResize = !e.data.finished), e.data.finished ? i.resize() : e.data.allSlides && i.attachAllElements();
                    });
            };
        (S.prototype = Object.create(a.default.prototype)),
            (S.prototype.constructor = S),
            (S.prototype.getCurrentState = function () {
                var e = this,
                    t = this.previousState ? this.previousState : {};
                (t.progress = this.getCurrentSlideIndex()),
                    t.answers || (t.answers = []),
                    (t.answered = this.elementInstances.map(function (t, n) {
                        return e.slideHasAnsweredTask(n);
                    }));
                for (var n = 0; n < this.elementInstances.length; n++)
                    if (this.elementInstances[n])
                        for (var i = 0; i < this.elementInstances[n].length; i++) {
                            var r = this.elementInstances[n][i];
                            (r.getCurrentState instanceof Function || "function" == typeof r.getCurrentState) && (t.answers[n] || (t.answers[n] = []), (t.answers[n][i] = r.getCurrentState()));
                        }
                return t;
            }),
            (S.prototype.slideHasAnsweredTask = function (e) {
                return (this.slidesWithSolutions[e] || [])
                    .filter(function (e) {
                        return (0, y.isFunction)(e.getAnswerGiven);
                    })
                    .some(function (e) {
                        return e.getAnswerGiven();
                    });
            }),
            (S.prototype.attach = function (e) {
                var t = this,
                    n = this;
                void 0 !== this.isRoot && this.isRoot() && this.setActivityStarted();
                var i =
                    '<div class="h5p-keymap-explanation hidden-but-read">' +
                    this.l10n.accessibilitySlideNavigationExplanation +
                    '</div><div class="h5p-fullscreen-announcer hidden-but-read" aria-live="polite"></div><div class="h5p-wrapper" tabindex="0" aria-label="' +
                    this.l10n.accessibilityCanvasLabel +
                    '">  <div class="h5p-current-slide-announcer hidden-but-read" aria-live="polite"></div>  <div tabindex="-1"></div>  <div class="h5p-box-wrapper">    <div class="h5p-presentation-wrapper">      <div class="h5p-keywords-wrapper"></div>     <div class="h5p-slides-wrapper"></div>    </div>  </div>  <nav class="h5p-cp-navigation">    <ol class="h5p-progressbar list-unstyled"></ol>  </nav>  <div class="h5p-footer"></div></div>';
                e.attr("role", "application").addClass("h5p-course-presentation").html(i),
                    (this.$container = e),
                    (this.$slideAnnouncer = e.find(".h5p-current-slide-announcer")),
                    (this.$fullscreenAnnouncer = e.find(".h5p-fullscreen-announcer")),
                    (this.$slideTop = this.$slideAnnouncer.next()),
                    (this.$wrapper = e
                        .children(".h5p-wrapper")
                        .focus(function () {
                            n.initKeyEvents();
                        })
                        .blur(function () {
                            void 0 !== n.keydown && (H5P.jQuery("body").unbind("keydown", n.keydown), delete n.keydown);
                        })
                        .click(function (e) {
                            var t = H5P.jQuery(e.target),
                                i = n.belongsToTagName(e.target, ["input", "textarea", "a", "button"], e.currentTarget),
                                r = -1 !== e.target.tabIndex,
                                s = t.closest(".h5p-popup-container"),
                                o = 0 !== s.length;
                            if (!i && !r && !n.editor)
                                if (o) {
                                    var a = t.closest("[tabindex]");
                                    1 === a.closest(".h5p-popup-container").length ? a.focus() : s.find(".h5p-close-popup").focus();
                                } else n.$wrapper.focus();
                            n.presentation.keywordListEnabled && !n.presentation.keywordListAlwaysShow && n.presentation.keywordListAutoHide && !t.is("textarea, .h5p-icon-pencil, span") && n.hideKeywords();
                        })),
                    this.on("exitFullScreen", function () {
                        t.$footer.removeClass("footer-full-screen"), t.$fullScreenButton.attr("title", t.l10n.fullscreen), t.$fullscreenAnnouncer.html(t.l10n.accessibilityExitedFullscreen);
                    }),
                    this.on("enterFullScreen", function () {
                        t.$fullscreenAnnouncer.html(t.l10n.accessibilityEnteredFullscreen);
                    });
                var r = parseInt(this.$wrapper.css("width"));
                this.width = 0 !== r ? r : 640;
                var s = parseInt(this.$wrapper.css("height"));
                (this.height = 0 !== s ? s : 400), (this.ratio = 16 / 9), (this.fontSize = 16), (this.$boxWrapper = this.$wrapper.children(".h5p-box-wrapper"));
                var o = this.$boxWrapper.children(".h5p-presentation-wrapper");
                (this.$slidesWrapper = o.children(".h5p-slides-wrapper")),
                    (this.$keywordsWrapper = o.children(".h5p-keywords-wrapper")),
                    (this.$progressbar = this.$wrapper.find(".h5p-progressbar")),
                    (this.$footer = this.$wrapper.children(".h5p-footer")),
                    (this.initKeywords = void 0 === this.presentation.keywordListEnabled || !0 === this.presentation.keywordListEnabled || void 0 !== this.editor),
                    this.activeSurface && void 0 === this.editor && ((this.initKeywords = !1), this.$boxWrapper.css("height", "100%")),
                    (this.isSolutionMode = !1),
                    this.createSlides(),
                    (this.elementsAttached[this.currentSlideIndex] = !0);
                var a;
                if (
                    ((this.showSummarySlide = !1),
                    this.hideSummarySlide
                        ? (this.showSummarySlide = !this.hideSummarySlide)
                        : this.slidesWithSolutions.forEach(function (e) {
                              n.showSummarySlide = e.length;
                          }),
                    void 0 === this.editor && (this.showSummarySlide || this.hasAnswerElements))
                ) {
                    var l = { elements: [], keywords: [] };
                    this.slides.push(l), (a = H5P.jQuery(g.default.createHTML(l)).appendTo(this.$slidesWrapper)), a.addClass("h5p-summary-slide"), this.isCurrentSlide(this.slides.length - 1) && (this.$current = a);
                }
                var c = this.getKeywordMenuConfig();
                c.length > 0 || this.isEditor()
                    ? (this.keywordMenu.init(c),
                      this.keywordMenu.on("select", function (e) {
                          return t.keywordClick(e.data.index);
                      }),
                      this.keywordMenu.on("close", function () {
                          return t.hideKeywords();
                      }),
                      this.keywordMenu.on("select", function () {
                          t.$currentKeyword = t.$keywords.children(".h5p-current");
                      }),
                      (this.$keywords = (0, m.jQuery)(this.keywordMenu.getElement()).appendTo(this.$keywordsWrapper)),
                      (this.$currentKeyword = this.$keywords.children(".h5p-current")),
                      this.setKeywordsOpacity(void 0 === this.presentation.keywordListOpacity ? 90 : this.presentation.keywordListOpacity),
                      this.presentation.keywordListAlwaysShow && this.showKeywords())
                    : (this.$keywordsWrapper.remove(), (this.initKeywords = !1)),
                    void 0 === this.editor && this.activeSurface
                        ? (this.$progressbar.add(this.$footer).remove(),
                          H5P.fullscreenSupported &&
                              ((this.$fullScreenButton = H5P.jQuery("<div/>", { class: "h5p-toggle-full-screen", title: this.l10n.fullscreen, role: "button", tabindex: 0, appendTo: this.$wrapper })),
                              (0, y.addClickAndKeyboardListeners)(this.$fullScreenButton, function () {
                                  return n.toggleFullScreen();
                              })))
                        : (this.initTouchEvents(), (this.navigationLine = new u.default(this)), (this.previousState && this.previousState.progress) || this.setSlideNumberAnnouncer(0, !1), (this.summarySlideObject = new d.default(this, a))),
                    new h.default(this),
                    this.previousState && this.previousState.progress && this.jumpToSlide(this.previousState.progress);
            }),
            (S.prototype.belongsToTagName = function (e, t, n) {
                if (!e) return !1;
                (n = n || document.body),
                    "string" == typeof t && (t = [t]),
                    (t = t.map(function (e) {
                        return e.toLowerCase();
                    }));
                var i = e.tagName.toLowerCase();
                return -1 !== t.indexOf(i) || (n !== e && this.belongsToTagName(e.parentNode, t, n));
            }),
            (S.prototype.updateKeywordMenuFromSlides = function () {
                this.keywordMenu.removeAllMenuItemElements();
                var e = this.getKeywordMenuConfig();
                return (0, m.jQuery)(this.keywordMenu.init(e));
            }),
            (S.prototype.getKeywordMenuConfig = function () {
                var e = this;
                return this.slides
                    .map(function (t, n) {
                        return { title: e.createSlideTitle(t), subtitle: e.l10n.slide + " " + (n + 1), index: n };
                    })
                    .filter(function (e) {
                        return null !== e.title;
                    });
            }),
            (S.prototype.createSlideTitle = function (e) {
                var t = this.isEditor() ? this.l10n.noTitle : null;
                return this.hasKeywords(e) ? e.keywords[0].main : t;
            }),
            (S.prototype.isEditor = function () {
                return void 0 !== this.editor;
            }),
            (S.prototype.hasKeywords = function (e) {
                return void 0 !== e.keywords && e.keywords.length > 0;
            }),
            (S.prototype.createSlides = function () {
                for (var e = this, t = 0; t < e.children.length; t++) {
                    var n = t === e.currentSlideIndex;
                    e.children[t].getElement().appendTo(e.$slidesWrapper), n && e.children[t].setCurrent(), (e.isEditor() || 0 === t || 1 === t || n) && e.children[t].appendElements();
                }
            }),
            (S.prototype.hasScoreData = function (e) {
                return "undefined" !== (void 0 === e ? "undefined" : s(e)) && "function" == typeof e.getScore && "function" == typeof e.getMaxScore;
            }),
            (S.prototype.getScore = function () {
                var e = this;
                return (0, y.flattenArray)(e.slidesWithSolutions).reduce(function (t, n) {
                    return t + (e.hasScoreData(n) ? n.getScore() : 0);
                }, 0);
            }),
            (S.prototype.getMaxScore = function () {
                var e = this;
                return (0, y.flattenArray)(e.slidesWithSolutions).reduce(function (t, n) {
                    return t + (e.hasScoreData(n) ? n.getMaxScore() : 0);
                }, 0);
            }),
            (S.prototype.setProgressBarFeedback = function (e) {
                var t = this;
                void 0 !== e && e
                    ? e.forEach(function (e) {
                          var n = t.progressbarParts[e.slide - 1].find(".h5p-progressbar-part-has-task");
                          if (n.hasClass("h5p-answered")) {
                              var i = e.score >= e.maxScore;
                              n.addClass(i ? "h5p-is-correct" : "h5p-is-wrong"), t.navigationLine.updateSlideTitle(e.slide - 1);
                          }
                      })
                    : this.progressbarParts.forEach(function (e) {
                          e.find(".h5p-progressbar-part-has-task").removeClass("h5p-is-correct").removeClass("h5p-is-wrong");
                      });
            }),
            (S.prototype.toggleKeywords = function () {
                this[this.$keywordsWrapper.hasClass("h5p-open") ? "hideKeywords" : "showKeywords"]();
            }),
            (S.prototype.hideKeywords = function () {
                this.$keywordsWrapper.hasClass("h5p-open") &&
                    (void 0 !== this.$keywordsButton &&
                        (this.$keywordsButton.attr("title", this.l10n.showKeywords), this.$keywordsButton.attr("aria-label", this.l10n.showKeywords), this.$keywordsButton.attr("aria-expanded", "false"), this.$keywordsButton.focus()),
                    this.$keywordsWrapper.removeClass("h5p-open"));
            }),
            (S.prototype.showKeywords = function () {
                this.$keywordsWrapper.hasClass("h5p-open") ||
                    (void 0 !== this.$keywordsButton && (this.$keywordsButton.attr("title", this.l10n.hideKeywords), this.$keywordsButton.attr("aria-label", this.l10n.hideKeywords), this.$keywordsButton.attr("aria-expanded", "true")),
                    this.$keywordsWrapper.addClass("h5p-open"),
                    this.presentation.keywordListAlwaysShow || this.$keywordsWrapper.find('li[tabindex="0"]').focus());
            }),
            (S.prototype.setKeywordsOpacity = function (e) {
                var t = this.$keywordsWrapper.css("background-color").split(/\(|\)|,/g),
                    n = r(t, 3),
                    i = n[0],
                    s = n[1],
                    o = n[2];
                this.$keywordsWrapper.css("background-color", "rgba(" + i + ", " + s + ", " + o + ", " + e / 100 + ")");
            }),
            (S.prototype.fitCT = function () {
                void 0 === this.editor &&
                    this.$current.find(".h5p-ct").each(function () {
                        for (var e = 100, t = H5P.jQuery(this), n = t.parent().height(); t.outerHeight() > n && (e--, t.css({ fontSize: e + "%", lineHeight: e + 65 + "%" }), !(e < 0)); );
                    });
            }),
            (S.prototype.resize = function () {
                var e = this.$container.hasClass("h5p-fullscreen") || this.$container.hasClass("h5p-semi-fullscreen");
                if (!this.ignoreResize) {
                    this.$wrapper.css("width", "auto");
                    var t = this.$container.width(),
                        n = {};
                    if (e) {
                        var i = this.$container.height();
                        t / i > this.ratio && ((t = i * this.ratio), (n.width = t + "px"));
                    }
                    var r = t / this.width;
                    (n.height = t / this.ratio + "px"), (n.fontSize = this.fontSize * r + "px"), void 0 !== this.editor && this.editor.setContainerEm(this.fontSize * r * 0.75), this.$wrapper.css(n), (this.swipeThreshold = 100 * r);
                    var s = this.elementInstances[this.$current.index()];
                    if (void 0 !== s)
                        for (var o = this.slides[this.$current.index()].elements, a = 0; a < s.length; a++) {
                            var l = s[a];
                            (void 0 !== l.preventResize && !1 !== l.preventResize) || void 0 === l.$ || o[a].displayAsButton || H5P.trigger(l, "resize");
                        }
                    this.fitCT();
                }
            }),
            (S.prototype.toggleFullScreen = function () {
                H5P.isFullscreen || this.$container.hasClass("h5p-fullscreen") || this.$container.hasClass("h5p-semi-fullscreen")
                    ? void 0 !== H5P.exitFullScreen && void 0 !== H5P.fullScreenBrowserPrefix
                        ? H5P.exitFullScreen()
                        : void 0 === H5P.fullScreenBrowserPrefix
                        ? H5P.jQuery(".h5p-disable-fullscreen").click()
                        : "" === H5P.fullScreenBrowserPrefix
                        ? window.top.document.exitFullScreen()
                        : "ms" === H5P.fullScreenBrowserPrefix
                        ? window.top.document.msExitFullscreen()
                        : window.top.document[H5P.fullScreenBrowserPrefix + "CancelFullScreen"]()
                    : (this.$footer.addClass("footer-full-screen"),
                      this.$fullScreenButton.attr("title", this.l10n.exitFullscreen),
                      H5P.fullScreen(this.$container, this),
                      void 0 === H5P.fullScreenBrowserPrefix && H5P.jQuery(".h5p-disable-fullscreen").hide());
            }),
            (S.prototype.focus = function () {
                this.$wrapper.focus();
            }),
            (S.prototype.keywordClick = function (e) {
                this.shouldHideKeywordsAfterSelect() && this.hideKeywords(), this.jumpToSlide(e, !0);
            }),
            (S.prototype.shouldHideKeywordsAfterSelect = function () {
                return this.presentation.keywordListEnabled && !this.presentation.keywordListAlwaysShow && this.presentation.keywordListAutoHide && void 0 === this.editor;
            }),
            (S.prototype.setElementsOverride = function (e) {
                (this.elementsOverride = { params: {} }),
                    e &&
                        ((this.elementsOverride.params.behaviour = {}),
                        e.showSolutionButton && (this.elementsOverride.params.behaviour.enableSolutionsButton = "on" === e.showSolutionButton),
                        e.retryButton && (this.elementsOverride.params.behaviour.enableRetry = "on" === e.retryButton));
            }),
            (S.prototype.attachElements = function (e, t) {
                if (void 0 === this.elementsAttached[t]) {
                    var n = this.slides[t],
                        i = this.elementInstances[t];
                    if (void 0 !== n.elements) for (var r = 0; r < n.elements.length; r++) this.attachElement(n.elements[r], i[r], e, t);
                    this.trigger("domChanged", { $target: e, library: "CoursePresentation", key: "newSlide" }, { bubbles: !0, external: !0 }), (this.elementsAttached[t] = !0);
                }
            }),
            (S.prototype.attachElement = function (e, t, n, i) {
                var r = void 0 !== e.displayAsButton && e.displayAsButton,
                    s = void 0 !== e.buttonSize ? "h5p-element-button-" + e.buttonSize : "",
                    o = "h5p-element" + (r ? " h5p-element-button-wrapper" : "") + (s.length ? " " + s : ""),
                    a = H5P.jQuery("<div>", { class: o })
                        .css({ left: e.x + "%", top: e.y + "%", width: e.width + "%", height: e.height + "%" })
                        .appendTo(n),
                    l = void 0 === e.backgroundOpacity || 0 === e.backgroundOpacity;
                if ((a.toggleClass("h5p-transparent", l), r)) {
                    this.createInteractionButton(e, t).appendTo(a);
                } else {
                    var d = e.action && e.action.library,
                        c = d ? this.getLibraryTypePmz(e.action.library) : "other",
                        u = H5P.jQuery("<div>", { class: "h5p-element-outer " + c + "-outer-element" })
                            .css({ background: "rgba(255,255,255," + (void 0 === e.backgroundOpacity ? 0 : e.backgroundOpacity / 100) + ")" })
                            .appendTo(a),
                        p = H5P.jQuery("<div>", { class: "h5p-element-inner" }).appendTo(u);
                    if (
                        (t.on("set-size", function (e) {
                            for (var t in e.data) a.get(0).style[t] = e.data[t];
                        }),
                        t.attach(p),
                        void 0 !== e.action && "H5P.InteractiveVideo" === e.action.library.substr(0, 20))
                    ) {
                        var h = function () {
                            t.$container.addClass("h5p-fullscreen"),
                                t.controls.$fullscreen && t.controls.$fullscreen.remove(),
                                (t.hasFullScreen = !0),
                                t.controls.$play.hasClass("h5p-pause") ? t.$controls.addClass("h5p-autohide") : t.enableAutoHide();
                        };
                        void 0 !== t.controls ? h() : t.on("controls", h);
                    }
                    this.setOverflowTabIndex();
                }
                return void 0 !== this.editor ? this.editor.processElement(e, a, i, t) : (e.solution && this.addElementSolutionButton(e, t, a), (this.hasAnswerElements = this.hasAnswerElements || void 0 !== t.exportAnswers)), a;
            }),
            (S.prototype.disableTabIndexes = function () {
                var e = this.$container.find(".h5p-popup-container");
                this.$tabbables = this.$container
                    .find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]")
                    .filter(function () {
                        var t = (0, m.jQuery)(this),
                            n = m.jQuery.contains(e.get(0), t.get(0));
                        if (t.data("tabindex")) return !0;
                        if (!n) {
                            var i = t.attr("tabindex");
                            return t.data("tabindex", i), t.attr("tabindex", "-1"), !0;
                        }
                        return !1;
                    });
            }),
            (S.prototype.restoreTabIndexes = function () {
                this.$tabbables &&
                    this.$tabbables.each(function () {
                        var e = (0, m.jQuery)(this),
                            t = e.data("tabindex");
                        e.hasClass("ui-slider-handle") ? (e.attr("tabindex", 0), e.removeData("tabindex")) : void 0 !== t ? (e.attr("tabindex", t), e.removeData("tabindex")) : e.removeAttr("tabindex");
                    });
            }),
            (S.prototype.createInteractionButton = function (e, t) {
                var n = this,
                    i = e.action.params && e.action.params.cpAutoplay,
                    r = e.action.metadata ? e.action.metadata.title : "";
                "" === r && (r = (e.action.params && e.action.params.contentName) || e.action.library.split(" ")[0].split(".")[1]);
                var s = this.getLibraryTypePmz(e.action.library),
                    o = function (e) {
                        return function () {
                            return e.attr("aria-expanded", "false");
                        };
                    },
                    a = (0, m.jQuery)("<div>", { role: "button", tabindex: 0, "aria-label": r, "aria-popup": !0, "aria-expanded": !1, class: "h5p-element-button h5p-element-button-" + e.buttonSize + " " + s + "-button" }),
                    l = (0, m.jQuery)('<div class="h5p-button-element"></div>');
                t.attach(l);
                var d = "h5p-advancedtext" === s ? { x: e.x, y: e.y } : null;
                return (
                    (0, y.addClickAndKeyboardListeners)(a, function () {
                        a.attr("aria-expanded", "true"), n.showInteractionPopup(t, a, l, s, i, o(a), d), n.disableTabIndexes();
                    }),
                    void 0 !== e.action &&
                        "H5P.InteractiveVideo" === e.action.library.substr(0, 20) &&
                        t.on("controls", function () {
                            t.controls.$fullscreen && t.controls.$fullscreen.remove();
                        }),
                    a
                );
            }),
            (S.prototype.showInteractionPopup = function (e, t, n, i, r, s) {
                var o = this,
                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                    l = function () {
                        e.trigger("resize");
                    };
                if (!this.isEditor()) {
                    this.on("exitFullScreen", l),
                        this.showPopup(
                            n,
                            t,
                            a,
                            function () {
                                o.pauseMedia(e), n.detach(), o.off("exitFullScreen", l), s();
                            },
                            i
                        ),
                        H5P.trigger(e, "resize"),
                        "h5p-image" === i && this.resizePopupImage(n);
                    n.closest(".h5p-popup-container");
                    setTimeout(function () {
                        var e = n.find(":input").add(n.find("[tabindex]"));
                        e.length ? e[0].focus() : (n.attr("tabindex", 0), n.focus());
                    }, 200),
                        (0, y.isFunction)(e.setActivityStarted) && (0, y.isFunction)(e.getScore) && e.setActivityStarted(),
                        r && (0, y.isFunction)(e.play) && e.play();
                }
            }),
            (S.prototype.getLibraryTypePmz = function (e) {
                return (0, y.kebabCase)(e.split(" ")[0]).toLowerCase();
            }),
            (S.prototype.resizePopupImage = function (e) {
                var t = Number(e.css("fontSize").replace("px", "")),
                    n = e.find("img"),
                    i = function (n, i) {
                        if (!(i / t < 18.5)) {
                            var r = n / i;
                            (i = 18.5 * t), e.css({ width: i * r, height: i });
                        }
                    };
                n.height()
                    ? i(n.width(), n.height())
                    : n.one("load", function () {
                          i(this.width, this.height);
                      });
            }),
            (S.prototype.addElementSolutionButton = function (e, t, n) {
                var i = this;
                (t.showCPComments = function () {
                    if (0 === n.children(".h5p-element-solution").length && (0, y.stripHTML)(e.solution).length > 0) {
                        var t = (0, m.jQuery)("<div/>", { role: "button", tabindex: 0, title: i.l10n.solutionsButtonTitle, "aria-popup": !0, "aria-expanded": !1, class: "h5p-element-solution" })
                                .append('<span class="joubel-icon-comment-normal"><span class="h5p-icon-shadow"></span><span class="h5p-icon-speech-bubble"></span><span class="h5p-icon-question"></span></span>')
                                .appendTo(n),
                            r = { x: e.x, y: e.y };
                        e.displayAsButton || ((r.x += e.width - 4), (r.y += e.height - 12)),
                            (0, y.addClickAndKeyboardListeners)(t, function () {
                                return i.showPopup(e.solution, t, r);
                            });
                    }
                }),
                    void 0 !== e.alwaysDisplayComments && e.alwaysDisplayComments && t.showCPComments();
            }),
            (S.prototype.showPopup = function (e, t) {
                var n,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = this,
                    s = arguments[3],
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "h5p-popup-comment-field",
                    a = this,
                    l = function (e) {
                        if (n) return void (n = !1);
                        void 0 !== s &&
                            setTimeout(function () {
                                s(), a.restoreTabIndexes();
                            }, 100),
                            e.preventDefault(),
                            d.addClass("h5p-animate"),
                            d.find(".h5p-popup-container").addClass("h5p-animate"),
                            setTimeout(function () {
                                d.remove();
                            }, 100),
                            t.focus();
                    },
                    d = (0, m.jQuery)(
                        '<div class="h5p-popup-overlay ' +
                            o +
                            '"><div class="h5p-popup-container" role="dialog"><div class="h5p-cp-dialog-titlebar"><div class="h5p-dialog-title"></div><div role="button" tabindex="0" class="h5p-close-popup" title="' +
                            this.l10n.close +
                            '"></div></div><div class="h5p-popup-wrapper" role="document"></div></div></div>'
                    ),
                    c = d.find(".h5p-popup-wrapper");
                e instanceof H5P.jQuery ? c.append(e) : c.html(e);
                var u = d.find(".h5p-popup-container");
                return (
                    (function (e, t, n) {
                        if (n) {
                            t.css({ visibility: "hidden" }), e.prependTo(r.$wrapper);
                            var i = t.height(),
                                s = t.width(),
                                o = e.height(),
                                a = e.width(),
                                l = s * (100 / a),
                                d = i * (100 / o);
                            if (l > 50 && d > 50) return void e.detach();
                            l > d && d < 45 && ((l = Math.sqrt(l * d)), t.css({ width: l + "%" }));
                            var c = 100 - l - 7.5,
                                u = n.x;
                            n.x > c ? (u = c) : n.x < 7.5 && (u = 7.5), (d = t.height() * (100 / o));
                            var p = 100 - d - 10,
                                h = n.y;
                            n.y > p ? (h = p) : n.y < 10 && (h = 10), e.detach(), t.css({ left: u + "%", top: h + "%" });
                        }
                    })(d, u, i),
                    d.addClass("h5p-animate"),
                    u.css({ visibility: "" }).addClass("h5p-animate"),
                    d
                        .prependTo(this.$wrapper)
                        .focus()
                        .removeClass("h5p-animate")
                        .click(l)
                        .find(".h5p-popup-container")
                        .removeClass("h5p-animate")
                        .click(function () {
                            n = !0;
                        })
                        .keydown(function (e) {
                            e.which === y.keyCode.ESC && l(e);
                        })
                        .end(),
                    (0, y.addClickAndKeyboardListeners)(d.find(".h5p-close-popup"), function (e) {
                        return l(e);
                    }),
                    d
                );
            }),
            (S.prototype.checkForSolutions = function (e) {
                return void 0 !== e.showSolutions || void 0 !== e.showCPComments;
            }),
            (S.prototype.initKeyEvents = function () {
                if (void 0 === this.keydown && !this.activeSurface) {
                    var e = this,
                        t = !1;
                    (this.keydown = function (n) {
                        t ||
                            ((37 !== n.keyCode && 33 !== n.keyCode) || !e.previousSlide() ? (39 !== n.keyCode && 34 !== n.keyCode) || !e.nextSlide() || (n.preventDefault(), (t = !0)) : (n.preventDefault(), (t = !0)),
                            t &&
                                setTimeout(function () {
                                    t = !1;
                                }, 300));
                    }),
                        H5P.jQuery("body").keydown(this.keydown);
                }
            }),
            (S.prototype.initTouchEvents = function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    s,
                    o = this,
                    a = !1,
                    l = !1,
                    d = function (e) {
                        return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
                    },
                    c = d("");
                this.$slidesWrapper
                    .bind("touchstart", function (d) {
                        (l = !1), (n = e = d.originalEvent.touches[0].pageX), (t = d.originalEvent.touches[0].pageY);
                        var c = o.$slidesWrapper.width();
                        (i = 0 === o.currentSlideIndex ? 0 : -c), (r = o.currentSlideIndex + 1 >= o.slides.length ? 0 : c), (s = null), (a = !0);
                    })
                    .bind("touchmove", function (c) {
                        var u = c.originalEvent.touches;
                        a && (o.$current.prev().addClass("h5p-touch-move"), o.$current.next().addClass("h5p-touch-move"), (a = !1)), (n = u[0].pageX);
                        var p = e - n;
                        null === s && (s = Math.abs(t - c.originalEvent.touches[0].pageY) > Math.abs(p)),
                            1 !== u.length ||
                                s ||
                                (c.preventDefault(), l || (p < 0 ? o.$current.prev().css(d("translateX(" + (i - p) + "px")) : o.$current.next().css(d("translateX(" + (r - p) + "px)")), o.$current.css(d("translateX(" + -p + "px)"))));
                    })
                    .bind("touchend", function () {
                        if (!s) {
                            var t = e - n;
                            if ((t > o.swipeThreshold && o.nextSlide()) || (t < -o.swipeThreshold && o.previousSlide())) return;
                        }
                        o.$slidesWrapper.children().css(c).removeClass("h5p-touch-move");
                    });
            }),
            (S.prototype.updateTouchPopup = function (e, t, n, i) {
                if (arguments.length <= 0) return void (void 0 !== this.touchPopup && this.touchPopup.remove());
                var r = "";
                if (
                    void 0 !== this.$keywords &&
                    void 0 !==
                        this.$keywords
                            .children(":eq(" + t + ")")
                            .find("span")
                            .html()
                )
                    r += this.$keywords
                        .children(":eq(" + t + ")")
                        .find("span")
                        .html();
                else {
                    var s = t + 1;
                    r += this.l10n.slide + " " + s;
                }
                void 0 === this.editor && t >= this.slides.length - 1 && (r = this.l10n.showSolutions),
                    void 0 === this.touchPopup ? (this.touchPopup = H5P.jQuery("<div/>", { class: "h5p-touch-popup" }).insertAfter(e)) : this.touchPopup.insertAfter(e),
                    i - 0.15 * e.parent().height() < 0 ? (i = 0) : (i -= 0.15 * e.parent().height()),
                    this.touchPopup.css({ "max-width": e.width() - n, left: n, top: i }),
                    this.touchPopup.html(r);
            }),
            (S.prototype.previousSlide = function (e) {
                var t = this.$current.prev();
                return !!t.length && this.jumpToSlide(t.index(), e, !1);
            }),
            (S.prototype.nextSlide = function (e) {
                var t = this.$current.next();
                return !!t.length && this.jumpToSlide(t.index(), e, !1);
            }),
            (S.prototype.isCurrentSlide = function (e) {
                return this.currentSlideIndex === e;
            }),
            (S.prototype.getCurrentSlideIndex = function () {
                return this.currentSlideIndex;
            }),
            (S.prototype.attachAllElements = function () {
                for (var e = this.$slidesWrapper.children(), t = 0; t < this.slides.length; t++) this.attachElements(e.eq(t), t);
                void 0 !== this.summarySlideObject && this.summarySlideObject.updateSummarySlide(this.slides.length - 1, !0);
            }),
            (S.prototype.jumpToSlide = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = this;
                if (void 0 === this.editor && this.contentId) {
                    var r = this.createXAPIEventTemplate("progressed");
                    (r.data.statement.object.definition.extensions["http://id.tincanapi.com/extension/ending-point"] = e + 1), this.trigger(r);
                }
                if (!this.$current.hasClass("h5p-animate")) {
                    var s = this.$current.addClass("h5p-animate"),
                        o = i.$slidesWrapper.children(),
                        a = o.filter(":lt(" + e + ")");
                    this.$current = o.eq(e).addClass("h5p-animate");
                    var l = this.currentSlideIndex;
                    (this.currentSlideIndex = e), this.attachElements(this.$current, e);
                    var d = this.$current.next();
                    d.length && this.attachElements(d, e + 1), this.setOverflowTabIndex();
                    var c = this.elementInstances[l];
                    if (void 0 !== c) for (var u = 0; u < c.length; u++) this.slides[l].elements[u].displayAsButton || i.pauseMedia(c[u]);
                    return (
                        setTimeout(function () {
                            s.removeClass("h5p-current"),
                                o.css({ "-webkit-transform": "", "-moz-transform": "", "-ms-transform": "", transform: "" }).removeClass("h5p-touch-move").removeClass("h5p-previous"),
                                a.addClass("h5p-previous"),
                                i.$current.addClass("h5p-current"),
                                i.trigger("changedSlide", i.$current.index());
                        }, 1),
                        setTimeout(function () {
                            if ((i.$slidesWrapper.children().removeClass("h5p-animate"), void 0 === i.editor)) {
                                var e = i.elementInstances[i.currentSlideIndex],
                                    t = i.slides[i.currentSlideIndex].elements;
                                if (void 0 !== e)
                                    for (var n = 0; n < e.length; n++)
                                        t[n] && t[n].action && t[n].action.params && t[n].action.params.cpAutoplay && !t[n].displayAsButton && "function" == typeof e[n].play && e[n].play(),
                                            t[n].displayAsButton || "function" != typeof e[n].setActivityStarted || "function" != typeof e[n].getScore || e[n].setActivityStarted();
                            }
                        }, 250),
                        void 0 !== this.$keywords && (this.keywordMenu.setCurrentSlideIndex(e), (this.$currentKeyword = this.$keywords.find(".h5p-current")), t || this.keywordMenu.scrollToKeywords(e)),
                        i.presentation.keywordListEnabled && i.presentation.keywordListAlwaysShow && i.showKeywords(),
                        i.navigationLine && (i.navigationLine.updateProgressBar(e, l, this.isSolutionMode), i.navigationLine.updateFooter(e), this.setSlideNumberAnnouncer(e, n)),
                        i.summarySlideObject && i.summarySlideObject.updateSummarySlide(e, !0),
                        void 0 !== this.editor && void 0 !== this.editor.dnb && (this.editor.dnb.setContainer(this.$current), this.editor.dnb.blurAll()),
                        this.trigger("resize"),
                        this.fitCT(),
                        !0
                    );
                }
            }),
            (S.prototype.setOverflowTabIndex = function () {
                void 0 !== this.$current &&
                    this.$current.find(".h5p-element-inner").each(function () {
                        var e = (0, m.jQuery)(this),
                            t = void 0;
                        this.classList.contains("h5p-table") && (t = e.find(".h5p-table").outerHeight());
                        var n = e.closest(".h5p-element-outer").innerHeight();
                        void 0 !== t && null !== n && t > n && e.attr("tabindex", 0);
                    });
            }),
            (S.prototype.setSlideNumberAnnouncer = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = "";
                if (!this.navigationLine) return n;
                var i = this.slides[e];
                i.keywords && i.keywords.length > 0 && !this.navigationLine.isSummarySlide(e) && (n += this.l10n.slide + " " + (e + 1) + ": "),
                    (n += this.navigationLine.createSlideTitle(e)),
                    this.$slideAnnouncer.html(n),
                    t && this.$slideTop.focus();
            }),
            (S.prototype.resetTask = function () {
                this.summarySlideObject.toggleSolutionMode(!1);
                for (var e = 0; e < this.slidesWithSolutions.length; e++)
                    if (void 0 !== this.slidesWithSolutions[e])
                        for (var t = 0; t < this.slidesWithSolutions[e].length; t++) {
                            var n = this.slidesWithSolutions[e][t];
                            n.resetTask && n.resetTask();
                        }
                this.navigationLine.updateProgressBar(0), this.jumpToSlide(0, !1), this.$container.find(".h5p-popup-overlay").remove();
            }),
            (S.prototype.showSolutions = function () {
                for (var e = !1, t = [], n = !1, i = 0; i < this.slidesWithSolutions.length; i++)
                    if (void 0 !== this.slidesWithSolutions[i]) {
                        this.elementsAttached[i] || this.attachElements(this.$slidesWrapper.children(":eq(" + i + ")"), i), e || (this.jumpToSlide(i, !1), (e = !0));
                        for (var r = 0, s = 0, o = [], a = 0; a < this.slidesWithSolutions[i].length; a++) {
                            var l = this.slidesWithSolutions[i][a];
                            void 0 !== l.addSolutionButton && l.addSolutionButton(),
                                l.showSolutions && l.showSolutions(),
                                l.showCPComments && l.showCPComments(),
                                void 0 !== l.getMaxScore && ((s += l.getMaxScore()), (r += l.getScore()), (n = !0), o.push(l.coursePresentationIndexOnSlide));
                        }
                        t.push({ indexes: o, slide: i + 1, score: r, maxScore: s });
                    }
                if (n) return t;
            }),
            (S.prototype.getSlideScores = function (e) {
                for (var t = !0 === e, n = [], i = !1, r = 0; r < this.slidesWithSolutions.length; r++)
                    if (void 0 !== this.slidesWithSolutions[r]) {
                        this.elementsAttached[r] || this.attachElements(this.$slidesWrapper.children(":eq(" + r + ")"), r), t || (this.jumpToSlide(r, !1), (t = !0));
                        for (var s = 0, o = 0, a = [], l = 0; l < this.slidesWithSolutions[r].length; l++) {
                            var d = this.slidesWithSolutions[r][l];
                            void 0 !== d.getMaxScore && ((o += d.getMaxScore()), (s += d.getScore()), (i = !0), a.push(d.coursePresentationIndexOnSlide));
                        }
                        n.push({ indexes: a, slide: r + 1, score: s, maxScore: o });
                    }
                if (i) return n;
            }),
            (S.prototype.getCopyrights = function () {
                var e,
                    t = new H5P.ContentCopyrights();
                if (this.presentation && this.presentation.globalBackgroundSelector && this.presentation.globalBackgroundSelector.imageGlobalBackground) {
                    var n = this.presentation.globalBackgroundSelector.imageGlobalBackground,
                        i = new H5P.MediaCopyright(n.copyright);
                    i.setThumbnail(new H5P.Thumbnail(H5P.getPath(n.path, this.contentId), n.width, n.height)), t.addMedia(i);
                }
                for (var r = 0; r < this.slides.length; r++) {
                    var s = new H5P.ContentCopyrights();
                    if ((s.setLabel(this.l10n.slide + " " + (r + 1)), this.slides[r] && this.slides[r].slideBackgroundSelector && this.slides[r].slideBackgroundSelector.imageSlideBackground)) {
                        var o = this.slides[r].slideBackgroundSelector.imageSlideBackground,
                            a = new H5P.MediaCopyright(o.copyright);
                        a.setThumbnail(new H5P.Thumbnail(H5P.getPath(o.path, this.contentId), o.width, o.height)), s.addMedia(a);
                    }
                    if (void 0 !== this.elementInstances[r])
                        for (var l = 0; l < this.elementInstances[r].length; l++) {
                            var d = this.elementInstances[r][l];
                            if (this.slides[r].elements[l].action) {
                                var c = this.slides[r].elements[l].action.params,
                                    u = this.slides[r].elements[l].action.metadata;
                                (e = void 0),
                                    void 0 !== d.getCopyrights && (e = d.getCopyrights()),
                                    void 0 === e && ((e = new H5P.ContentCopyrights()), H5P.findCopyrights(e, c, this.contentId, { metadata: u, machineName: d.libraryInfo.machineName }));
                                var p = l + 1;
                                void 0 !== c.contentName ? (p += ": " + c.contentName) : void 0 !== d.getTitle ? (p += ": " + d.getTitle()) : c.l10n && c.l10n.name && (p += ": " + c.l10n.name), e.setLabel(p), s.addContent(e);
                            }
                        }
                    t.addContent(s);
                }
                return t;
            }),
            (S.prototype.pauseMedia = function (e) {
                try {
                    void 0 !== e.pause && (e.pause instanceof Function || "function" == typeof e.pause)
                        ? e.pause()
                        : void 0 !== e.video && void 0 !== e.video.pause && (e.video.pause instanceof Function || "function" == typeof e.video.pause)
                        ? e.video.pause()
                        : void 0 !== e.stop && (e.stop instanceof Function || "function" == typeof e.stop) && e.stop();
                } catch (e) {
                    H5P.error(e);
                }
            }),
            (S.prototype.getXAPIData = function () {
                var e = this.createXAPIEventTemplate("answered"),
                    t = e.getVerifiedStatementValue(["object", "definition"]);
                H5P.jQuery.extend(t, { interactionType: "compound", type: "http://adlnet.gov/expapi/activities/cmi.interaction" });
                var n = this.getScore(),
                    i = this.getMaxScore();
                e.setScoredResult(n, i, this, !0, n === i);
                var r = (0, y.flattenArray)(this.slidesWithSolutions)
                    .map(function (e) {
                        if (e && e.getXAPIData) return e.getXAPIData();
                    })
                    .filter(function (e) {
                        return !!e;
                    });
                return { statement: e.data.statement, children: r };
            }),
            (t.default = S);
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            var n = this;
            (n.index = e), (n.parent = t);
        }
        e.exports = i;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            r = n(1),
            s = (function () {
                function e(e, t) {
                    (this.$summarySlide = t), (this.cp = e);
                }
                return (
                    (e.prototype.updateSummarySlide = function (e, t) {
                        var n = this,
                            r = void 0 === this.cp.editor && void 0 !== this.$summarySlide && e >= this.cp.slides.length - 1,
                            s = !this.cp.showSummarySlide && this.cp.hasAnswerElements;
                        if (r) {
                            n.cp.presentation.keywordListEnabled && n.cp.presentation.keywordListAlwaysShow && n.cp.hideKeywords(), this.$summarySlide.children().remove();
                            var o = n.cp.getSlideScores(t),
                                a = n.outputScoreStats(o);
                            if (((0, i.jQuery)(a).appendTo(n.$summarySlide), !s)) {
                                var l = n.totalScores(o);
                                if (!isNaN(l.totalPercentage)) {
                                    var d = i.JoubelUI.createScoreBar(l.totalMaxScore, "", "", "");
                                    d.setScore(l.totalScore);
                                    var c = (0, i.jQuery)(".h5p-summary-total-score", n.$summarySlide);
                                    d.appendTo(c),
                                        setTimeout(function () {
                                            c.append(
                                                (0, i.jQuery)("<div/>", {
                                                    "aria-live": "polite",
                                                    class: "hidden-but-read",
                                                    html: n.cp.l10n.summary + ". " + n.cp.l10n.accessibilityTotalScore.replace("@score", l.totalScore).replace("@maxScore", l.totalMaxScore),
                                                })
                                            );
                                        }, 100);
                                }
                                if (1 == n.cp.enableTwitterShare) {
                                    var u = (0, i.jQuery)(".h5p-summary-twitter-message", n.$summarySlide);
                                    this.addTwitterScoreLinkTo(u, l);
                                }
                                if (1 == n.cp.enableFacebookShare) {
                                    var p = (0, i.jQuery)(".h5p-summary-facebook-message", n.$summarySlide);
                                    this.addFacebookScoreLinkTo(p, l);
                                }
                                if (1 == n.cp.enableGoogleShare) {
                                    var h = (0, i.jQuery)(".h5p-summary-google-message", n.$summarySlide);
                                    this.addGoogleScoreLinkTo(h);
                                }
                                n.$summarySlide.find(".h5p-td > .h5p-slide-link").each(function () {
                                    var e = (0, i.jQuery)(this);
                                    e.click(function (t) {
                                        n.cp.jumpToSlide(parseInt(e.data("slide"), 10) - 1), t.preventDefault();
                                    });
                                });
                            }
                            var f = (0, i.jQuery)(".h5p-summary-footer", n.$summarySlide);
                            i.JoubelUI.createButton({
                                class: "h5p-show-solutions",
                                html: n.cp.l10n.submitResult,
                                on: {
                                    click: function () {
                                        
                                        var customTotalScore = 0;
                                        var customTotalMaxScore = 0;
                                        for (i = 0; i < o.length; i += 1) {
                                            customTotalScore += o[i].score;
                                            customTotalMaxScore += o[i].maxScore;
                                        }
                                        console.log(customTotalScore);
                                        console.log(customTotalMaxScore);
                                        n.cp.triggerXAPICompleted(customTotalScore, customTotalMaxScore);
                                    },
                                },
                                appendTo: f,
                            }),
                            this.cp.showSummarySlideSolutionButton &&
                                i.JoubelUI.createButton({
                                    class: "h5p-show-solutions",
                                    html: n.cp.l10n.showSolutions,
                                    on: {
                                        click: function () {
                                            n.toggleSolutionMode(!0);
                                        },
                                    },
                                    appendTo: f,
                                }),
                                this.cp.showSummarySlideRetryButton &&
                                    i.JoubelUI.createButton({
                                        class: "h5p-cp-retry-button",
                                        html: n.cp.l10n.retry,
                                        on: {
                                            click: function () {
                                                n.cp.resetTask();
                                            },
                                        },
                                        appendTo: f,
                                    }),
                                n.cp.hasAnswerElements &&
                                    i.JoubelUI.createButton({
                                        class: "h5p-eta-export",
                                        html: n.cp.l10n.exportAnswers,
                                        on: {
                                            click: function () {
                                                H5P.ExportableTextArea.Exporter.run(n.cp.slides, n.cp.elementInstances);
                                            },
                                        },
                                        appendTo: f,
                                    });
                        }
                    }),
                    (e.prototype.outputScoreStats = function (e) {
                        var t = this;
                        if (void 0 === e) return this.$summarySlide.addClass("h5p-summary-only-export"), '<div class="h5p-summary-footer"></div>';
                        var n,
                            i = this,
                            r = 0,
                            s = 0,
                            o = "",
                            a = 0,
                            l = "";
                        for (n = 0; n < e.length; n += 1)
                            (l = t.getSlideDescription(e[n])),
                                (a = Math.round((e[n].score / e[n].maxScore) * 100)),
                                isNaN(a) && (a = 0),
                                (o +=
                                    '<tr><td class="h5p-td h5p-summary-task-title"><a href="#" class="h5p-slide-link"  aria-label=" ' +
                                    i.cp.l10n.slide +
                                    " " +
                                    e[n].slide +
                                    ": " +
                                    l.replace(/(<([^>]+)>)/gi, "") +
                                    " " +
                                    a +
                                    '%" data-slide="' +
                                    e[n].slide +
                                    '">' +
                                    i.cp.l10n.slide +
                                    " " +
                                    e[n].slide +
                                    ": " +
                                    l.replace(/(<([^>]+)>)/gi, "") +
                                    '</a></td><td class="h5p-td h5p-summary-score-bar"><p class="hidden-but-read">' +
                                    a +
                                    "%</p><p>" +
                                    e[n].score +
                                    "<span>/</span>" +
                                    e[n].maxScore +
                                    "</p></td></tr>"),
                                (r += e[n].score),
                                (s += e[n].maxScore);
                        //i.cp.triggerXAPICompleted(r, s);
                        var d = i.cp.enableTwitterShare || i.cp.enableFacebookShare || i.cp.enableGoogleShare ? '<span class="h5p-show-results-text">' + i.cp.l10n.shareResult + "</span>" : "",
                            c = 1 == i.cp.enableTwitterShare ? '<span class="h5p-summary-twitter-message" aria-label="' + i.cp.l10n.shareTwitter + '"></span>' : "",
                            u = 1 == i.cp.enableFacebookShare ? '<span class="h5p-summary-facebook-message" aria-label="' + i.cp.l10n.shareFacebook + '"></span>' : "",
                            p = 1 == i.cp.enableGoogleShare ? '<span class="h5p-summary-google-message" aria-label="' + i.cp.l10n.shareGoogle + '"></span>' : "";
                        return (
                            '<div class="h5p-summary-table-holder"><div class="h5p-summary-table-pages"><table class="h5p-score-table"><thead><tr><th class="h5p-summary-table-header slide">' +
                            i.cp.l10n.slide +
                            '</th><th class="h5p-summary-table-header score">' +
                            i.cp.l10n.score +
                            "<span>/</span>" +
                            i.cp.l10n.total.toLowerCase() +
                            "</th></tr></thead><tbody>" +
                            o +
                            '</tbody></table></div><div class="h5p-summary-total-table"><div class="h5p-summary-social">' +
                            d +
                            u +
                            c +
                            p +
                            '</div><div class="h5p-summary-total-score"><p>' +
                            i.cp.l10n.totalScore +
                            '</p></div></div></div><div class="h5p-summary-footer"></div>'
                        );
                    }),
                    (e.prototype.getSlideDescription = function (e) {
                        var t,
                            n,
                            i = this,
                            r = i.cp.slides[e.slide - 1].elements;
                        if (e.indexes.length > 1) t = i.cp.l10n.summaryMultipleTaskText;
                        else if (void 0 !== r[e.indexes[0]] && r[0])
                            if (((n = r[e.indexes[0]].action), "function" == typeof i.cp.elementInstances[e.slide - 1][e.indexes[0]].getTitle)) t = i.cp.elementInstances[e.slide - 1][e.indexes[0]].getTitle();
                            else if (void 0 !== n.library && n.library) {
                                var s = n.library
                                        .split(" ")[0]
                                        .split(".")[1]
                                        .split(/(?=[A-Z])/),
                                    o = "";
                                s.forEach(function (e, t) {
                                    0 !== t && (e = e.toLowerCase()), (o += e), t <= s.length - 1 && (o += " ");
                                }),
                                    (t = o);
                            }
                        return t;
                    }),
                    (e.prototype.addTwitterScoreLinkTo = function (e, t) {
                        var n = this,
                            i = n.cp.twitterShareStatement || "",
                            s = n.cp.twitterShareHashtags || "",
                            o = n.cp.twitterShareUrl || "";
                        (o = o.replace("@currentpageurl", window.location.href)),
                            (i = i
                                .replace("@score", t.totalScore)
                                .replace("@maxScore", t.totalMaxScore)
                                .replace("@percentage", t.totalPercentage + "%")
                                .replace("@currentpageurl", window.location.href)),
                            (s = s.trim().replace(" ", "")),
                            (i = encodeURIComponent(i)),
                            (s = encodeURIComponent(s)),
                            (o = encodeURIComponent(o));
                        var a = "https://twitter.com/intent/tweet?";
                        (a += i.length > 0 ? "text=" + i + "&" : ""), (a += o.length > 0 ? "url=" + o + "&" : ""), (a += s.length > 0 ? "hashtags=" + s : "");
                        var l = window.innerWidth / 2,
                            d = window.innerHeight / 2;
                        e.attr("tabindex", "0").attr("role", "button"),
                            (0, r.addClickAndKeyboardListeners)(e, function () {
                                return window.open(a, n.cp.l10n.shareTwitter, "width=800,height=300,left=" + l + ",top=" + d), !1;
                            });
                    }),
                    (e.prototype.addFacebookScoreLinkTo = function (e, t) {
                        var n = this,
                            i = n.cp.facebookShareUrl || "",
                            s = n.cp.facebookShareQuote || "";
                        (i = i.replace("@currentpageurl", window.location.href)),
                            (s = s
                                .replace("@currentpageurl", window.location.href)
                                .replace("@percentage", t.totalPercentage + "%")
                                .replace("@score", t.totalScore)
                                .replace("@maxScore", t.totalMaxScore)),
                            (i = encodeURIComponent(i)),
                            (s = encodeURIComponent(s));
                        var o = "https://www.facebook.com/sharer/sharer.php?";
                        (o += i.length > 0 ? "u=" + i + "&" : ""), (o += s.length > 0 ? "quote=" + s : "");
                        var a = window.innerWidth / 2,
                            l = window.innerHeight / 2;
                        e.attr("tabindex", "0").attr("role", "button"),
                            (0, r.addClickAndKeyboardListeners)(e, function () {
                                return window.open(o, n.cp.l10n.shareFacebook, "width=800,height=300,left=" + a + ",top=" + l), !1;
                            });
                    }),
                    (e.prototype.addGoogleScoreLinkTo = function (e) {
                        var t = this,
                            n = t.cp.googleShareUrl || "";
                        (n = n.replace("@currentpageurl", window.location.href)), (n = encodeURIComponent(n));
                        var i = "https://plus.google.com/share?";
                        i += n.length > 0 ? "url=" + n : "";
                        var s = window.innerWidth / 2,
                            o = window.innerHeight / 2;
                        e.attr("tabindex", "0").attr("role", "button"),
                            (0, r.addClickAndKeyboardListeners)(e, function () {
                                return window.open(i, t.cp.l10n.shareGoogle, "width=401,height=437,left=" + s + ",top=" + o), !1;
                            });
                    }),
                    (e.prototype.totalScores = function (e) {
                        if (void 0 === e) return { totalScore: 0, totalMaxScore: 0, totalPercentage: 0 };
                        var t,
                            n = 0,
                            i = 0;
                        for (t = 0; t < e.length; t += 1) (n += e[t].score), (i += e[t].maxScore);
                        var r = Math.round((n / i) * 100);
                        return isNaN(r) && (r = 0), { totalScore: n, totalMaxScore: i, totalPercentage: r };
                    }),
                    (e.prototype.toggleSolutionMode = function (e) {
                        var t = this;
                        if (((this.cp.isSolutionMode = e), e)) {
                            var n = t.cp.showSolutions();
                            this.cp.setProgressBarFeedback(n), this.cp.$footer.addClass("h5p-footer-solution-mode"), this.setFooterSolutionModeText(this.cp.l10n.solutionModeText);
                        } else this.cp.$footer.removeClass("h5p-footer-solution-mode"), this.setFooterSolutionModeText(), this.cp.setProgressBarFeedback();
                    }),
                    (e.prototype.setFooterSolutionModeText = function (e) {
                        void 0 !== e && e ? this.cp.$exitSolutionModeText.html(e) : this.cp.$exitSolutionModeText && this.cp.$exitSolutionModeText.html("");
                    }),
                    e
                );
            })();
        t.default = s;
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(18),
            o = i(s),
            a = n(3),
            l = i(a),
            d = n(5),
            c = i(d),
            u = n(1),
            p = { NO_INTERACTIONS: "none", NOT_ANSWERED: "not-answered", ANSWERED: "answered", CORRECT: "has-only-correct", INCORRECT: "has-incorrect" },
            h = (function (e) {
                function t(e) {
                    var t;
                    (this.cp = e),
                        (this.answeredLabels =
                            ((t = {}),
                            r(t, p.NOT_ANSWERED, this.cp.l10n.containsNotCompleted),
                            r(t, p.ANSWERED, this.cp.l10n.containsCompleted),
                            r(t, p.CORRECT, this.cp.l10n.containsOnlyCorrect),
                            r(t, p.INCORRECT, this.cp.l10n.containsIncorrectAnswers),
                            r(t, p.NO_INTERACTIONS, "@slideName"),
                            t)),
                        this.initProgressbar(this.cp.slidesWithSolutions),
                        this.initFooter(),
                        this.initTaskAnsweredListener(),
                        this.toggleNextAndPreviousButtonDisabled(this.cp.getCurrentSlideIndex());
                }
                return (
                    (t.prototype.initTaskAnsweredListener = function () {
                        var e = this;
                        this.cp.elementInstances.forEach(function (t, n) {
                            t.filter(function (e) {
                                return (0, u.isFunction)(e.on);
                            }).forEach(function (t) {
                                t.on("xAPI", function (t) {
                                    var i = t.getVerb();
                                    if ((0, u.contains)(["interacted", "answered", "attempted"], i)) {
                                        var r = e.cp.slideHasAnsweredTask(n);
                                        e.setTaskAnswered(n, r);
                                    } else "completed" === i && t.setVerb("answered");
                                    void 0 === t.data.statement.context.extensions && (t.data.statement.context.extensions = {}), (t.data.statement.context.extensions["http://id.tincanapi.com/extension/ending-point"] = n + 1);
                                });
                            });
                        });
                    }),
                    (t.prototype.initProgressbar = function (t) {
                        var n = this,
                            i = this,
                            r = (i.cp.previousState && i.cp.previousState.progress) || 0;
                        (this.progresbarKeyboardControls = new l.default([new c.default()])),
                            (this.progresbarKeyboardControls.negativeTabIndexAllowed = !0),
                            this.progresbarKeyboardControls.on("select", function (t) {
                                i.displaySlide(e(t.element).data("slideNumber"));
                            }),
                            this.progresbarKeyboardControls.on("beforeNextElement", function (e) {
                                return e.index !== e.elements.length - 1;
                            }),
                            this.progresbarKeyboardControls.on("beforePreviousElement", function (e) {
                                return 0 !== e.index;
                            }),
                            void 0 !== this.cp.progressbarParts &&
                                this.cp.progressbarParts &&
                                this.cp.progressbarParts.forEach(function (e) {
                                    i.progresbarKeyboardControls.removeElement(e.children("a").get(0)), e.remove();
                                }),
                            (i.cp.progressbarParts = []);
                        for (
                            var s = function (t) {
                                    t.preventDefault();
                                    var n = e(this).data("slideNumber");
                                    i.progresbarKeyboardControls.setTabbableByIndex(n), i.displaySlide(n), i.cp.focus();
                                },
                                o = 0;
                            o < this.cp.slides.length;
                            o += 1
                        ) {
                            var a = this.cp.slides[o],
                                d = this.createSlideTitle(o),
                                p = e("<li>", { class: "h5p-progressbar-part" }).appendTo(i.cp.$progressbar),
                                h = e("<a>", { href: "#", html: '<span class="h5p-progressbar-part-title hidden-but-read">' + d + "</span>", tabindex: "-1" })
                                    .data("slideNumber", o)
                                    .click(s)
                                    .appendTo(p);
                            if (
                                (this.progresbarKeyboardControls.addElement(h.get(0)),
                                u.isIOS ||
                                    (function () {
                                        var t = e("<div/>", { class: "h5p-progressbar-popup", html: d, "aria-hidden": "true" }).appendTo(p);
                                        p.mouseenter(function () {
                                            return n.ensurePopupVisible(t);
                                        });
                                    })(),
                                this.isSummarySlide(o) && p.addClass("progressbar-part-summary-slide"),
                                0 === o && p.addClass("h5p-progressbar-part-show"),
                                o === r && p.addClass("h5p-progressbar-part-selected"),
                                i.cp.progressbarParts.push(p),
                                this.updateSlideTitle(o),
                                this.cp.slides.length <= 60 && a.elements && a.elements.length > 0)
                            ) {
                                var f = t[o] && t[o].length > 0,
                                    v = !!(i.cp.previousState && i.cp.previousState.answered && i.cp.previousState.answered[o]);
                                f && (e("<div>", { class: "h5p-progressbar-part-has-task" }).appendTo(h), this.setTaskAnswered(o, v));
                            }
                        }
                    }),
                    (t.prototype.ensurePopupVisible = function (e) {
                        var t = this.cp.$container.width(),
                            n = e.outerWidth(),
                            i = e.offset().left;
                        i < 0 ? (e.css("left", 0), e.css("transform", "translateX(0)")) : i + n > t && (e.css("left", "auto"), e.css("right", 0), e.css("transform", "translateX(0)"));
                    }),
                    (t.prototype.displaySlide = function (e) {
                        var t = this.cp.getCurrentSlideIndex();
                        this.updateSlideTitle(e, { isCurrent: !0 }), this.updateSlideTitle(t, { isCurrent: !1 }), this.cp.jumpToSlide(e), this.toggleNextAndPreviousButtonDisabled(e);
                    }),
                    (t.prototype.createSlideTitle = function (e) {
                        var t = this.cp.slides[e];
                        return t.keywords && t.keywords.length > 0 ? t.keywords[0].main : this.isSummarySlide(e) ? this.cp.l10n.summary : this.cp.l10n.slide + " " + (e + 1);
                    }),
                    (t.prototype.isSummarySlide = function (e) {
                        return !(void 0 !== this.cp.editor || e !== this.cp.slides.length - 1 || !this.cp.showSummarySlide);
                    }),
                    (t.prototype.initFooter = function () {
                        var t = this,
                            n = this,
                            i = this.cp.$footer,
                            r = e("<div/>", { class: "h5p-footer-left-adjusted" }).appendTo(i),
                            s = e("<div/>", { class: "h5p-footer-center-adjusted" }).appendTo(i),
                            a = e("<div/>", { role: "toolbar", class: "h5p-footer-right-adjusted" }).appendTo(i);
                        (this.cp.$keywordsButton = e("<div/>", {
                            class: "h5p-footer-button h5p-footer-toggle-keywords",
                            "aria-expanded": "false",
                            "aria-label": this.cp.l10n.showKeywords,
                            title: this.cp.l10n.showKeywords,
                            role: "button",
                            tabindex: "0",
                            html: '<span class="h5p-icon-menu"></span><span class="current-slide-title"></span>',
                        }).appendTo(r)),
                            (0, u.addClickAndKeyboardListeners)(this.cp.$keywordsButton, function (e) {
                                n.cp.presentation.keywordListAlwaysShow || (n.cp.toggleKeywords(), e.stopPropagation());
                            }),
                            (!this.cp.presentation.keywordListAlwaysShow && this.cp.initKeywords) || this.cp.$keywordsButton.hide(),
                            this.cp.presentation.keywordListEnabled || this.cp.$keywordsWrapper.add(this.$keywordsButton).hide(),
                            this.updateFooterKeyword(0),
                            (this.cp.$prevSlideButton = e("<div/>", {
                                class: "h5p-footer-button h5p-footer-previous-slide",
                                "aria-label": this.cp.l10n.prevSlide,
                                title: this.cp.l10n.prevSlide,
                                role: "button",
                                tabindex: "-1",
                                "aria-disabled": "true",
                            }).appendTo(s)),
                            (0, u.addClickAndKeyboardListeners)(this.cp.$prevSlideButton, function () {
                                return t.cp.previousSlide();
                            });
                        var l = e("<div/>", { class: "h5p-footer-slide-count" }).appendTo(s);
                        (this.cp.$footerCurrentSlide = e("<div/>", { html: "1", class: "h5p-footer-slide-count-current", title: this.cp.l10n.currentSlide, "aria-hidden": "true" }).appendTo(l)),
                            (this.cp.$footerCounter = e("<div/>", { class: "hidden-but-read", html: this.cp.l10n.slideCount.replace("@index", "1").replace("@total", this.cp.slides.length.toString()) }).appendTo(s)),
                            e("<div/>", { html: "/", class: "h5p-footer-slide-count-delimiter", "aria-hidden": "true" }).appendTo(l),
                            (this.cp.$footerMaxSlide = e("<div/>", { html: this.cp.slides.length, class: "h5p-footer-slide-count-max", title: this.cp.l10n.lastSlide, "aria-hidden": "true" }).appendTo(l)),
                            (this.cp.$nextSlideButton = e("<div/>", { class: "h5p-footer-button h5p-footer-next-slide", "aria-label": this.cp.l10n.nextSlide, title: this.cp.l10n.nextSlide, role: "button", tabindex: "0" }).appendTo(s)),
                            (0, u.addClickAndKeyboardListeners)(this.cp.$nextSlideButton, function () {
                                return t.cp.nextSlide();
                            }),
                            void 0 === this.cp.editor &&
                                ((this.cp.$exitSolutionModeButton = e("<div/>", {
                                    role: "button",
                                    class: "h5p-footer-exit-solution-mode",
                                    "aria-label": this.cp.l10n.solutionModeTitle,
                                    title: this.cp.l10n.solutionModeTitle,
                                    tabindex: "0",
                                }).appendTo(a)),
                                (0, u.addClickAndKeyboardListeners)(this.cp.$exitSolutionModeButton, function () {
                                    return n.cp.jumpToSlide(n.cp.slides.length - 1);
                                }),
                                this.cp.enablePrintButton &&
                                    o.default.supported() &&
                                    ((this.cp.$printButton = e("<div/>", { class: "h5p-footer-button h5p-footer-print", "aria-label": this.cp.l10n.printTitle, title: this.cp.l10n.printTitle, role: "button", tabindex: "0" }).appendTo(a)),
                                    (0, u.addClickAndKeyboardListeners)(this.cp.$printButton, function () {
                                        return n.openPrintDialog();
                                    })),
                                H5P.fullscreenSupported &&
                                    ((this.cp.$fullScreenButton = e("<div/>", {
                                        class: "h5p-footer-button h5p-footer-toggle-full-screen",
                                        "aria-label": this.cp.l10n.fullscreen,
                                        title: this.cp.l10n.fullscreen,
                                        role: "button",
                                        tabindex: "0",
                                    })),
                                    (0, u.addClickAndKeyboardListeners)(this.cp.$fullScreenButton, function () {
                                        return n.cp.toggleFullScreen();
                                    }),
                                    this.cp.$fullScreenButton.appendTo(a))),
                            (this.cp.$exitSolutionModeText = e("<div/>", { html: "", class: "h5p-footer-exit-solution-mode-text" }).appendTo(this.cp.$exitSolutionModeButton));
                    }),
                    (t.prototype.openPrintDialog = function () {
                        var t = this,
                            n = e(".h5p-wrapper");
                        o.default
                            .showDialog(this.cp.l10n, n, function (e) {
                                o.default.print(t.cp, n, e);
                            })
                            .children('[role="dialog"]')
                            .focus();
                    }),
                    (t.prototype.updateProgressBar = function (e, t, n) {
                        var i,
                            r = this;
                        for (i = 0; i < r.cp.progressbarParts.length; i += 1) e + 1 > i ? r.cp.progressbarParts[i].addClass("h5p-progressbar-part-show") : r.cp.progressbarParts[i].removeClass("h5p-progressbar-part-show");
                        if ((r.progresbarKeyboardControls.setTabbableByIndex(e), r.cp.progressbarParts[e].addClass("h5p-progressbar-part-selected").siblings().removeClass("h5p-progressbar-part-selected"), void 0 === t))
                            return void r.cp.progressbarParts.forEach(function (e, t) {
                                r.setTaskAnswered(t, !1);
                            });
                        n || r.cp.editor;
                    }),
                    (t.prototype.setTaskAnswered = function (e, t) {
                        this.cp.progressbarParts[e].find(".h5p-progressbar-part-has-task").toggleClass("h5p-answered", t), this.updateSlideTitle(e, { state: t ? p.ANSWERED : p.NOT_ANSWERED });
                    }),
                    (t.prototype.updateSlideTitle = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = t.state,
                            i = t.isCurrent;
                        this.setSlideTitle(e, { state: (0, u.defaultValue)(n, this.getAnsweredState(e)), isCurrent: (0, u.defaultValue)(i, this.cp.isCurrentSlide(e)) });
                    }),
                    (t.prototype.setSlideTitle = function (e, t) {
                        var n = t.state,
                            i = void 0 === n ? p.NO_INTERACTIONS : n,
                            r = t.isCurrent,
                            s = void 0 !== r && r,
                            o = this.cp.slides.length,
                            a = this.cp.progressbarParts[e],
                            l = a.find(".h5p-progressbar-part-title"),
                            d = this.cp.l10n.slideCount.replace("@index", e + 1).replace("@total", o),
                            c = this.answeredLabels[i].replace("@slideName", this.createSlideTitle(e)),
                            u = s ? this.cp.l10n.currentSlide : "";
                        l.html(d + ": " + c + ". " + u);
                    }),
                    (t.prototype.getAnsweredState = function (e) {
                        var t = this.cp.progressbarParts[e],
                            n = this.slideHasInteraction(e),
                            i = this.cp.slideHasAnsweredTask(e);
                        return n ? (t.find(".h5p-is-correct").length > 0 ? p.CORRECT : t.find(".h5p-is-wrong").length > 0 ? p.INCORRECT : i ? p.ANSWERED : p.NOT_ANSWERED) : p.NO_INTERACTIONS;
                    }),
                    (t.prototype.slideHasInteraction = function (e) {
                        return this.cp.progressbarParts[e].find(".h5p-progressbar-part-has-task").length > 0;
                    }),
                    (t.prototype.updateFooter = function (e) {
                        this.cp.$footerCurrentSlide.html(e + 1),
                            this.cp.$footerMaxSlide.html(this.cp.slides.length),
                            this.cp.$footerCounter.html(this.cp.l10n.slideCount.replace("@index", (e + 1).toString()).replace("@total", this.cp.slides.length.toString())),
                            this.cp.isSolutionMode && e === this.cp.slides.length - 1 ? this.cp.$footer.addClass("summary-slide") : this.cp.$footer.removeClass("summary-slide"),
                            this.toggleNextAndPreviousButtonDisabled(e),
                            this.updateFooterKeyword(e);
                    }),
                    (t.prototype.toggleNextAndPreviousButtonDisabled = function (e) {
                        var t = this.cp.slides.length - 1;
                        this.cp.$prevSlideButton.attr("aria-disabled", (0 === e).toString()),
                            this.cp.$nextSlideButton.attr("aria-disabled", (e === t).toString()),
                            this.cp.$prevSlideButton.attr("tabindex", 0 === e ? "-1" : "0"),
                            this.cp.$nextSlideButton.attr("tabindex", e === t ? "-1" : "0");
                    }),
                    (t.prototype.updateFooterKeyword = function (e) {
                        var t = this.cp.slides[e],
                            n = "";
                        t && t.keywords && t.keywords[0] && (n = t.keywords[0].main),
                            !this.cp.isEditor() && this.cp.showSummarySlide && e >= this.cp.slides.length - 1 && (n = this.cp.l10n.summary),
                            this.cp.$keywordsButton.children(".current-slide-title").html((0, u.defaultValue)(n, ""));
                    }),
                    t
                );
            })(H5P.jQuery);
        t.default = h;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(1),
            r = (function (e) {
                function t() {}
                var n = 0;
                return (
                    (t.supported = function () {
                        return "function" == typeof window.print;
                    }),
                    (t.print = function (t, n, i) {
                        t.trigger("printing", { finished: !1, allSlides: i });
                        var r = e(".h5p-slide.h5p-current"),
                            s = r.height(),
                            o = r.width(),
                            a = o / 670,
                            l = e(".h5p-slide");
                        l.css({ height: s / a + "px", width: "670px", fontSize: Math.floor(100 / a) + "%" });
                        var d = n.height();
                        n.css("height", "auto"),
                            l.toggleClass("doprint", !0 === i),
                            r.addClass("doprint"),
                            setTimeout(function () {
                                window.print(), l.css({ height: "", width: "", fontSize: "" }), n.css("height", d + "px"), t.trigger("printing", { finished: !0 });
                            }, 500);
                    }),
                    (t.showDialog = function (t, r, s) {
                        var o = this,
                            a = n++,
                            l = "h5p-cp-print-dialog-" + a + "-title",
                            d = "h5p-cp-print-dialog-" + a + "-ingress",
                            c = e(
                                '<div class="h5p-popup-dialog h5p-print-dialog">\n                      <div role="dialog" aria-labelledby="' +
                                    l +
                                    '" aria-describedby="' +
                                    d +
                                    '" tabindex="-1" class="h5p-inner">\n                        <h2 id="' +
                                    l +
                                    '">' +
                                    t.printTitle +
                                    '</h2>\n                        <div class="h5p-scroll-content"></div>\n                        <div class="h5p-close" role="button" tabindex="0" title="' +
                                    H5P.t("close") +
                                    '">\n                      </div>\n                    </div>'
                            )
                                .insertAfter(r)
                                .click(function () {
                                    o.close();
                                })
                                .children(".h5p-inner")
                                .click(function () {
                                    return !1;
                                })
                                .end();
                        (0, i.addClickAndKeyboardListeners)(c.find(".h5p-close"), function () {
                            return o.close();
                        });
                        var u = c.find(".h5p-scroll-content");
                        return (
                            u.append(e("<div>", { class: "h5p-cp-print-ingress", id: d, html: t.printIngress })),
                            H5P.JoubelUI.createButton({
                                html: t.printAllSlides,
                                class: "h5p-cp-print-all-slides",
                                click: function () {
                                    o.close(), s(!0);
                                },
                            }).appendTo(u),
                            H5P.JoubelUI.createButton({
                                html: t.printCurrentSlide,
                                class: "h5p-cp-print-current-slide",
                                click: function () {
                                    o.close(), s(!1);
                                },
                            }).appendTo(u),
                            (this.open = function () {
                                setTimeout(function () {
                                    c.addClass("h5p-open"), H5P.jQuery(o).trigger("dialog-opened", [c]);
                                }, 1);
                            }),
                            (this.close = function () {
                                c.removeClass("h5p-open"),
                                    setTimeout(function () {
                                        c.remove();
                                    }, 200);
                            }),
                            this.open(),
                            c
                        );
                    }),
                    t
                );
            })(H5P.jQuery);
        t.default = r;
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.createElement = t.toggleClass = t.toggleVisibility = t.show = t.hide = t.removeClass = t.addClass = t.classListContains = t.removeChild = t.querySelectorAll = t.nodeListToArray = t.querySelector = t.appendChild = t.toggleAttribute = t.attributeEquals = t.hasAttribute = t.removeAttribute = t.setAttribute = t.getAttribute = void 0);
        var i = n(4),
            r = (t.getAttribute = (0, i.curry)(function (e, t) {
                return t.getAttribute(e);
            })),
            s = (t.setAttribute = (0, i.curry)(function (e, t, n) {
                return n.setAttribute(e, t);
            })),
            o =
                ((t.removeAttribute = (0, i.curry)(function (e, t) {
                    return t.removeAttribute(e);
                })),
                (t.hasAttribute = (0, i.curry)(function (e, t) {
                    return t.hasAttribute(e);
                })),
                (t.attributeEquals = (0, i.curry)(function (e, t, n) {
                    return n.getAttribute(e) === t;
                })),
                (t.toggleAttribute = (0, i.curry)(function (e, t) {
                    var n = r(e, t);
                    s(e, (0, i.inverseBooleanString)(n), t);
                })),
                (t.appendChild = (0, i.curry)(function (e, t) {
                    return e.appendChild(t);
                })),
                (t.querySelector = (0, i.curry)(function (e, t) {
                    return t.querySelector(e);
                })),
                (t.nodeListToArray = function (e) {
                    return Array.prototype.slice.call(e);
                })),
            a =
                ((t.querySelectorAll = (0, i.curry)(function (e, t) {
                    return o(t.querySelectorAll(e));
                })),
                (t.removeChild = (0, i.curry)(function (e, t) {
                    return e.removeChild(t);
                })),
                (t.classListContains = (0, i.curry)(function (e, t) {
                    return t.classList.contains(e);
                })),
                (t.addClass = (0, i.curry)(function (e, t) {
                    return t.classList.add(e);
                }))),
            l = (t.removeClass = (0, i.curry)(function (e, t) {
                return t.classList.remove(e);
            })),
            d = (t.hide = a("hidden")),
            c = (t.show = l("hidden"));
        (t.toggleVisibility = (0, i.curry)(function (e, t) {
            return (e ? c : d)(t);
        })),
            (t.toggleClass = (0, i.curry)(function (e, t, n) {
                n.classList[t ? "add" : "remove"](e);
            })),
            (t.createElement = function (e) {
                var t = e.tag,
                    n = e.id,
                    i = e.classes,
                    r = e.attributes,
                    s = document.createElement(t);
                return (
                    n && (s.id = n),
                    i &&
                        i.forEach(function (e) {
                            s.classList.add(e);
                        }),
                    r &&
                        Object.keys(r).forEach(function (e) {
                            s.setAttribute(e, r[e]);
                        }),
                    s
                );
            });
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.Eventful = function () {
            return {
                listeners: {},
                on: function (e, t, n) {
                    var i = { listener: t, scope: n };
                    return (this.listeners[e] = this.listeners[e] || []), this.listeners[e].push(i), this;
                },
                fire: function (e, t) {
                    return (this.listeners[e] || []).every(function (e) {
                        return !1 !== e.listener.call(e.scope || this, t);
                    });
                },
                propagate: function (e, t) {
                    var n = this;
                    e.forEach(function (e) {
                        return t.on(e, function (t) {
                            return n.fire(e, t);
                        });
                    });
                },
            };
        };
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            s = function e(t) {
                i(this, e);
                var n = t.presentation;
                n = r.jQuery.extend(!0, { globalBackgroundSelector: { fillGlobalBackground: "", imageGlobalBackground: {} }, slides: [{ slideBackgroundSelector: { fillSlideBackground: "", imageSlideBackground: {} } }] }, n);
                var s = function (e, n, i) {
                    var r = t.$slidesWrapper.children().filter(":not(.h5p-summary-slide)");
                    void 0 !== i && (r = r.eq(i)),
                        e && "" !== e
                            ? r.addClass("has-background").css("background-image", "").css("background-color", e)
                            : n &&
                              n.path &&
                              r
                                  .addClass("has-background")
                                  .css("background-color", "")
                                  .css("background-image", "url(" + H5P.getPath(n.path, t.contentId) + ")");
                };
                !(function () {
                    var e = n.globalBackgroundSelector;
                    s(e.fillGlobalBackground, e.imageGlobalBackground);
                })(),
                    (function () {
                        n.slides.forEach(function (e, t) {
                            var n = e.slideBackgroundSelector;
                            n && s(n.fillSlideBackground, n.imageSlideBackground, t);
                        });
                    })();
            };
        t.default = s;
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            o = n(3),
            a = i(o),
            l = n(5),
            d = i(l),
            c = n(1),
            u = n(0),
            p = function (e) {
                return parseInt(e.dataset.index);
            },
            h = (function () {
                function e(t) {
                    var n = this,
                        i = t.l10n,
                        s = t.currentIndex;
                    r(this, e),
                        (this.l10n = i),
                        (this.state = { currentIndex: (0, c.defaultValue)(s, 0) }),
                        (this.eventDispatcher = new u.EventDispatcher()),
                        (this.controls = new a.default([new d.default()])),
                        this.controls.on("select", function (e) {
                            n.onMenuItemSelect(p(e.element));
                        }),
                        this.controls.on("close", function () {
                            return n.eventDispatcher.trigger("close");
                        }),
                        (this.menuElement = this.createMenuElement()),
                        (this.currentSlideMarkerElement = this.createCurrentSlideMarkerElement());
                }
                return (
                    s(e, [
                        {
                            key: "init",
                            value: function (e) {
                                var t = this;
                                return (
                                    (this.menuItemElements = e.map(function (e) {
                                        return t.createMenuItemElement(e);
                                    })),
                                    this.menuItemElements.forEach(function (e) {
                                        return t.menuElement.appendChild(e);
                                    }),
                                    this.menuItemElements.forEach(function (e) {
                                        return t.controls.addElement(e);
                                    }),
                                    this.setCurrentSlideIndex(this.state.currentIndex),
                                    this.menuItemElements
                                );
                            },
                        },
                        {
                            key: "on",
                            value: function (e, t) {
                                this.eventDispatcher.on(e, t);
                            },
                        },
                        {
                            key: "getElement",
                            value: function () {
                                return this.menuElement;
                            },
                        },
                        {
                            key: "removeAllMenuItemElements",
                            value: function () {
                                var e = this;
                                this.menuItemElements.forEach(function (t) {
                                    e.controls.removeElement(t), e.menuElement.removeChild(t);
                                }),
                                    (this.menuItemElements = []);
                            },
                        },
                        {
                            key: "createMenuElement",
                            value: function () {
                                var e = (this.menuElement = document.createElement("ol"));
                                return e.setAttribute("role", "menu"), e.classList.add("list-unstyled"), e;
                            },
                        },
                        {
                            key: "createMenuItemElement",
                            value: function (e) {
                                var t = this,
                                    n = document.createElement("li");
                                return (
                                    n.setAttribute("role", "menuitem"),
                                    n.addEventListener("click", function (e) {
                                        t.onMenuItemSelect(p(e.currentTarget));
                                    }),
                                    this.applyConfigToMenuItemElement(n, e),
                                    n
                                );
                            },
                        },
                        {
                            key: "applyConfigToMenuItemElement",
                            value: function (e, t) {
                                (e.innerHTML = '<div class="h5p-keyword-subtitle">' + t.subtitle + '</div><span class="h5p-keyword-title">' + t.title + "</span>"), (e.dataset.index = t.index);
                            },
                        },
                        {
                            key: "onMenuItemSelect",
                            value: function (e) {
                                this.setCurrentSlideIndex(e), this.eventDispatcher.trigger("select", { index: e });
                            },
                        },
                        {
                            key: "setCurrentSlideIndex",
                            value: function (e) {
                                var t = this.getElementByIndex(this.menuItemElements, e);
                                t && ((this.state.currentIndex = e), this.updateCurrentlySelected(this.menuItemElements, this.state), this.controls.setTabbable(t));
                            },
                        },
                        {
                            key: "updateCurrentlySelected",
                            value: function (e, t) {
                                var n = this;
                                e.forEach(function (e) {
                                    var i = t.currentIndex === p(e);
                                    e.classList.toggle("h5p-current", i), i && e.appendChild(n.currentSlideMarkerElement);
                                });
                            },
                        },
                        {
                            key: "scrollToKeywords",
                            value: function (e) {
                                var t = this.getFirstElementAfter(e);
                                if (t) {
                                    var n = (0, u.jQuery)(this.menuElement),
                                        i = n.scrollTop() + (0, u.jQuery)(t).position().top - 8;
                                    c.isIPad ? n.scrollTop(i) : n.stop().animate({ scrollTop: i }, 250);
                                }
                            },
                        },
                        {
                            key: "getFirstElementAfter",
                            value: function (e) {
                                return this.menuItemElements.filter(function (t) {
                                    return p(t) >= e;
                                })[0];
                            },
                        },
                        {
                            key: "getElementByIndex",
                            value: function (e, t) {
                                return e.filter(function (e) {
                                    return p(e) === t;
                                })[0];
                            },
                        },
                        {
                            key: "createCurrentSlideMarkerElement",
                            value: function () {
                                var e = document.createElement("div");
                                return e.classList.add("hidden-but-read"), (e.innerHTML = this.l10n.currentSlide), e;
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = h;
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
            var t = this;
            l.default.call(t, o.default, e.elements);
            var n = void 0;
            (t.getElement = function () {
                return n || (n = H5P.jQuery(r.createHTML(e))), n;
            }),
                (t.setCurrent = function () {
                    this.parent.$current = n.addClass("h5p-current");
                }),
                (t.appendElements = function () {
                    for (var i = 0; i < t.children.length; i++) t.parent.attachElement(e.elements[i], t.children[i].instance, n, t.index);
                    (t.parent.elementsAttached[t.index] = !0), t.parent.trigger("domChanged", { $target: n, library: "CoursePresentation", key: "newSlide" }, { bubbles: !0, external: !0 });
                });
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(24),
            o = i(s),
            a = n(2),
            l = i(a);
        (r.createHTML = function (e) {
            return '<div role="document" class="h5p-slide"' + (void 0 !== e.background ? ' style="background:' + e.background + '"' : "") + "></div>";
        }),
            (t.default = r);
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            var t = this;
            if (void 0 === e.action)
                (t.instance = new s.default(e, { l10n: t.parent.parent.l10n, currentIndex: t.parent.index })),
                    t.parent.parent.isEditor() ||
                        t.instance.on("navigate", function (e) {
                            var n = e.data;
                            t.parent.parent.jumpToSlide(n);
                        });
            else {
                var n;
                (n = t.parent.parent.isEditor() ? H5P.jQuery.extend(!0, {}, e.action, t.parent.parent.elementsOverride) : H5P.jQuery.extend(!0, e.action, t.parent.parent.elementsOverride)),
                    n.params.autoplay
                        ? ((n.params.autoplay = !1), (n.params.cpAutoplay = !0))
                        : n.params.playback && n.params.playback.autoplay
                        ? ((n.params.playback.autoplay = !1), (n.params.cpAutoplay = !0))
                        : n.params.media && n.params.media.params && n.params.media.params.playback && n.params.media.params.playback.autoplay
                        ? ((n.params.media.params.playback.autoplay = !1), (n.params.cpAutoplay = !0))
                        : n.params.media && n.params.media.params && n.params.media.params.autoplay
                        ? ((n.params.media.params.autoplay = !1), (n.params.cpAutoplay = !0))
                        : n.params.override && n.params.override.autoplay && ((n.params.override.autoplay = !1), (n.params.cpAutoplay = !0));
                var i = t.parent.parent.elementInstances[t.parent.index] ? t.parent.parent.elementInstances[t.parent.index].length : 0;
                t.parent.parent.previousState &&
                    t.parent.parent.previousState.answers &&
                    t.parent.parent.previousState.answers[t.parent.index] &&
                    t.parent.parent.previousState.answers[t.parent.index][i] &&
                    (n.userDatas = { state: t.parent.parent.previousState.answers[t.parent.index][i] }),
                    (n.params = n.params || {}),
                    (t.instance = H5P.newRunnable(n, t.parent.parent.contentId, void 0, !0, { parent: t.parent.parent })),
                    void 0 !== t.instance.preventResize && (t.instance.preventResize = !0);
            }
            void 0 === t.parent.parent.elementInstances[t.parent.index] ? (t.parent.parent.elementInstances[t.parent.index] = [t.instance]) : t.parent.parent.elementInstances[t.parent.index].push(t.instance),
                (void 0 !== t.instance.showCPComments || t.instance.isTask || (void 0 === t.instance.isTask && void 0 !== t.instance.showSolutions)) &&
                    ((t.instance.coursePresentationIndexOnSlide = t.parent.parent.elementInstances[t.parent.index].length - 1),
                    void 0 === t.parent.parent.slidesWithSolutions[t.parent.index] && (t.parent.parent.slidesWithSolutions[t.parent.index] = []),
                    t.parent.parent.slidesWithSolutions[t.parent.index].push(t.instance)),
                void 0 !== t.instance.exportAnswers && t.instance.exportAnswers && (t.parent.parent.hasAnswerElements = !0),
                t.parent.parent.isTask || t.parent.parent.hideSummarySlide || ((t.instance.isTask || (void 0 === t.instance.isTask && void 0 !== t.instance.showSolutions)) && (t.parent.parent.isTask = !0));
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(25),
            s = (function (e) {
                return e && e.__esModule ? e : { default: e };
            })(r);
        t.default = i;
    },
    function (e, t, n) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            s = n(1),
            o = n(0),
            a = { SPECIFIED: "specified", NEXT: "next", PREVIOUS: "previous" },
            l = (function () {
                function e(t, n) {
                    var r = this,
                        l = t.title,
                        d = t.goToSlide,
                        c = void 0 === d ? 1 : d,
                        u = t.invisible,
                        p = t.goToSlideType,
                        h = void 0 === p ? a.SPECIFIED : p,
                        f = n.l10n,
                        v = n.currentIndex;
                    i(this, e), (this.eventDispatcher = new o.EventDispatcher());
                    var m = "h5p-press-to-go",
                        y = 0;
                    if (u) (l = void 0), (y = -1);
                    else {
                        if (!l)
                            switch (h) {
                                case a.SPECIFIED:
                                    l = f.goToSlide.replace(":num", c.toString());
                                    break;
                                case a.NEXT:
                                    l = f.goToSlide.replace(":num", f.nextSlide);
                                    break;
                                case a.PREVIOUS:
                                    l = f.goToSlide.replace(":num", f.prevSlide);
                            }
                        m += " h5p-visible";
                    }
                    var b = c - 1;
                    h === a.NEXT ? (b = v + 1) : h === a.PREVIOUS && (b = v - 1),
                        (this.$element = (0, o.jQuery)("<a/>", { href: "#", class: m, tabindex: y, title: l })),
                        (0, s.addClickAndKeyboardListeners)(this.$element, function (e) {
                            r.eventDispatcher.trigger("navigate", b), e.preventDefault();
                        });
                }
                return (
                    r(e, [
                        {
                            key: "attach",
                            value: function (e) {
                                e.html("").addClass("h5p-go-to-slide").append(this.$element);
                            },
                        },
                        {
                            key: "on",
                            value: function (e, t) {
                                this.eventDispatcher.on(e, t);
                            },
                        },
                    ]),
                    e
                );
            })();
        t.default = l;
    },
]);
