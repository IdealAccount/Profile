export const tooltipModel = {
    // The items that we are rendering in the tooltip. See Tooltip Item Interface section
    dataPoints: [],

    // Positioning
    xPadding: 10,
    yPadding: 10,
    xAlign: '',
    yAlign: '',

    // X and Y properties are the top left of the tooltip
    x: 1,
    y: 1,
    width: 1,
    height: 1,
    // Where the tooltip points to
    caretX: 1,
    caretY: 1,


    body: [{}],
    // lines of text that appear after the title but before the body
    beforeBody: [''],
    // line of text that appear after the body and before the footer
    afterBody: [''],
    bodyFontColor: Color,
    _bodyFontFamily: '',
    _bodyFontStyle: '',
    _bodyAlign: '',
    bodyFontSize: 1,
    bodySpacing: 2,

    // Title
    // lines of text that form the title
    title: [''],
    titleFontColor: Color,
    _titleFontFamily: '',
    _titleFontStyle: '',
    titleFontSize: 1,
    _titleAlign: '',
    titleSpacing: 1,
    titleMarginBottom: 1,

    // Footer
    // lines of text that form the footer
    footer: [''],
    footerFontColor: Color,
    _footerFontFamily: '',
    _footerFontStyle: '',
    footerFontSize: 1,
    _footerAlign: '',
    footerSpacing: 1,
    footerMarginTop: 1,

    // Appearance
    caretSize: 1,
    caretPadding: 1,
    cornerRadius: 1,
    backgroundColor: Color,

    // colors to render for each item in body[]. This is the color of the squares in the tooltip
    labelColors: [],
    labelTextColors: [],

    // 0 opacity is a hidden tooltip
    opacity: 0,
    legendColorBackground: Color,
    displayColors: true,
    borderColor: Color,
    borderWidth: 1
}
