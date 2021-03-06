Y.use(
  "node",
  "node-event-simulate",
  "squarespace-image-loader",
  "squarespace-ui-base",
  function (a) {
    a.on("domready", function () {
      a.all("body:not(.collection-type-template-page) img[data-src]").plug(
        a.Squarespace.Loader2
      );
      if (a.one(".page-image.content-fill"))
        a.on(
          "resize",
          function () {
            ImageLoader.load(a.one(".page-image img"));
          },
          a.config.win
        );
      var b = function () {
        if (
          a.one("body.collection-type-template-page") ||
          1024 >= window.innerWidth
        ) {
          var c = a.one("#title-area"),
            b = c.get("offsetHeight"),
            h = a.one("#homeBlockField"),
            g = h ? h.get("offsetHeight") : null,
            j = a.one("body"),
            f = a.one("body").get("winHeight"),
            e = a.one("#main-navigation ul"),
            d = 0,
            i = a.one("nav.social");
          if (
            j.hasClass("info-page-layout-poster") ||
            1024 >= window.innerWidth
          )
            (d =
              e.get("offsetHeight") +
              parseInt(e.getComputedStyle("marginTop")) +
              parseInt(e.getComputedStyle("marginBottom")) +
              40),
              (d += i && i.get("offsetHeight")),
              (f -= d);
          j.hasClass("info-page-layout-poster") &&
            620 >= window.innerHeight &&
            ((d =
              e.get("offsetHeight") +
              parseInt(e.getComputedStyle("marginTop")) +
              parseInt(e.getComputedStyle("marginBottom")) +
              40),
            (d += i && i.get("offsetHeight")),
            c.set("marginTop", d));
          if (
            j.hasClass("info-page-layout-poster") ||
            1024 >= window.innerWidth
          )
            (d =
              e.get("offsetHeight") +
              parseInt(e.getComputedStyle("marginTop")) +
              parseInt(e.getComputedStyle("marginBottom")) +
              40),
              (d += i && i.get("offsetHeight")),
              (f -= d),
              c.set("marginTop", d);
          if (
            j.hasClass("info-page-layout-business-card") ||
            1024 >= window.innerWidth
          )
            (d =
              e.get("offsetHeight") +
              parseInt(e.getComputedStyle("marginTop")) +
              parseInt(e.getComputedStyle("marginBottom")) +
              40),
              (f -= d);
          a.one("body:not(.freeform-text-on-info-page)") &&
            (b > f
              ? c && c.addClass("relative")
              : c && c.removeClass("relative"));
          a.one("body.freeform-text-on-info-page") &&
            (g > f
              ? h && h.addClass("relative")
              : h && h.removeClass("relative"));
        }
        a.one("#mobile-navigation") &&
          "block" == a.one("#mobile-navigation").getStyle("display") &&
          a.one(".social") &&
          ((c = a.one(".social").get("clientHeight")),
          (b = parseInt(a.one("#innerWrapper").getStyle("marginBottom"))),
          c > b
            ? a.one("#innerWrapper").setStyle("marginBottom", c + 10 + "px")
            : a.one("#innerWrapper").setStyle("marginBottom", ""));
      };
      b();
      a.on("resize", b, a.config.win);
      a.one("html.no-touch") &&
        (a
          .all(".pagination div:not(.disabled).right")
          .on("mouseenter", function () {
            a.all(".pagination .left").addClass("hide");
          }),
        a
          .all(".pagination div:not(.disabled).right")
          .on("mouseleave", function () {
            a.all(".pagination .left").removeClass("hide");
          }),
        a
          .all(".pagination div:not(.disabled).left")
          .on("mouseenter", function () {
            a.all(".pagination .right").addClass("hide");
          }),
        a
          .all(".pagination div:not(.disabled).left")
          .on("mouseleave", function () {
            a.all(".pagination .right").removeClass("hide");
          }));
      var g = function () {
        a.one("body.collection-type-template-page") &&
          (a.all("#title-area").each(function () {
            var c = a.one("#title-area").get("offsetHeight");
            a.all("#title-area").setStyle("marginTop", -(c / 2));
          }),
          a.all("#homeBlockField").each(function () {
            var c = a.one("#homeBlockField").get("offsetHeight");
            a.all("#homeBlockField").setStyle("marginTop", -(c / 2));
          }));
      };
      (b = a.one(".collection-type-template-page #title-area h1")) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(".collection-type-template-page #title-area"),
        });
      (b = a.one(
        ".collection-type-template-page #homeBlockField h1, .collection-type-template-page #homeBlockField h2, .collection-type-template-page #homeBlockField h3"
      )) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(".collection-type-template-page #homeBlockField"),
        });
      (b = a.one(".collection-type-template-page #title-area .site-tagline")) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(".collection-type-template-page #title-area"),
        });
      (b = a.one(".site-desc")) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(".collection-type-template-page #title-area"),
        });
      (b = a.one(".collection-type-template-page #title-area .email")) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(".collection-type-template-page #title-area"),
        });
      (b = a.one("body:not(.collection-type-template-page) #title-area h1")) &&
        b.plug(a.Squarespace.TextShrink, {
          parentEl: a.one(
            "body:not(.collection-type-template-page) #title-area"
          ),
        });
      g();
      a.on("resize", g, a.config.win);
      a.Global.on("tweak:change", function (c) {
        if ("freeform-text-on-info-page" === c.getName()) g();
        else if ("folderBgColor" === c.getName()) {
          c = a.all("li.folder.dropdown-open");
          var b = a.one("li.folder");
          b && 0 === c.size() && b.addClass("dropdown-open");
        }
      });
      a.one("body.collection-type-template-page") &&
        (g(),
        a.all("#title-area").addClass("show"),
        a.all("#homeBlockField").addClass("show"));
      (b = a.one(".site-title-image")) &&
        b.hasAttribute("data-src") &&
        ImageLoader.load(b, { load: !0 });
      a.all("li.folder").each(function (a) {
        a.on("click", function () {
          var b = a.siblings("li.folder.dropdown-open").item(0);
          b && b.toggleClass("dropdown-open");
          a && a.toggleClass("dropdown-open");
        });
      });
      var k = a.one("#mobile-navigation");
      if (k)
        a.on(
          "click",
          function () {
            k.toggleClass("sqs-mobile-nav-open");
            a.one("body").toggleClass("sqs-mobile-nav-open");
          },
          "#mobile-navigation-label"
        );
      var l = function () {
        if (
          (a.one(
            "body:not(.collection-type-template-page).info-page-layout-offset"
          ) ||
            a.one(
              "body:not(.collection-type-template-page).info-page-layout-business-card"
            )) &&
          a.one(".sqs-announcement-bar")
        ) {
          var b = a.one(".sqs-announcement-bar").get("offsetHeight");
          a.one("#main-navigation").setStyle(
            "transform",
            "translate3d(0," + b + "px,0)"
          );
          var g = a.config.win.scrollY;
          a.config.win.scrollY < b
            ? a
                .one("#main-navigation")
                .setStyle("transform", "translate3d(0," + (b - g) + "px,0)")
            : a
                .one("#main-navigation")
                .setStyle("transform", "translate3d(0,0,0)");
        }
      };
      l();
      a.on("scroll", function () {
        l();
      });
    });
  }
);
