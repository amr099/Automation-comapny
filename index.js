$(function () {
    // Pages transitions
    function showPage(page) {
        $(`section.${page}`).css("display", "flex");
        $(`section:not(.${page})`).hide();
        $(`.${page}-link`).addClass("selected");
        $(`a:not(.${page}-link)`).removeClass("selected");
    }

    $(`.home-link`).on("click", () => showPage("home"));
    $(`.brands-link`).on("click", () => showPage("brands"));
    $(`.contactus-link`).on("click", () => showPage("contactus"));

    //Brands transition
    function showBrand(brand) {
        console.log(brand);
        $(`section.brands>div.${brand}`).show();
        $(`section.brands>div:not(.${brand})`).hide();
        $(`li.${brand}`).addClass("selected");
        $(`li:not(.${brand})`).removeClass("selected");
    }

    $(`li.brand1`).on("click", () => showBrand("brand1"));
    $(`li.brand2`).on("click", () => showBrand("brand2"));
    $(`li.brand3`).on("click", () => showBrand("brand3"));
    $(`li.brand4`).on("click", () => showBrand("brand4"));

    // Contact us Form.
    $("form").on("submit", (e) => {
        _name = $(".input-div:nth(0) input");
        email = $(".input-div:nth(1) input");
        message = $(".input-div:nth(2) textarea");
        fields = [_name, email, message];

        for (let field of fields) {
            if (field.val() === "") {
                e.preventDefault();
                field.next().show();
                field.addClass("error");
            } else {
                field.next().hide();
                field.removeClass("error");
            }
        }
    });
});
