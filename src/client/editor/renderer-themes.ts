/**
 * Created by Derwish (derwish.pro@gmail.com) on 22.01.2017.
 * License: http://www.gnu.org/licenses/gpl-3.0.txt
 */


export let themes: Array<RendererTheme> = [];


export class RendererTheme {

    START_POS = 50;

    NODE_TITLE_HEIGHT = 16;
    NODE_SLOT_HEIGHT = 15;
    NODE_WIDTH = 150;
    NODE_MIN_WIDTH = 50;
    NODE_COLLAPSED_RADIUS = 10;
    NODE_COLLAPSED_WIDTH = 150;
    NODE_TITLE_COLOR = "#222";
    NODE_DEFAULT_COLOR = "#777";
    NODE_DEFAULT_BGCOLOR = "#373737";
    CONTAINER_NODE_COLOR = "#777";
    CONTAINER_NODE_BGCOLOR = "#373737";
    IO_NODE_COLOR = "#777";
    IO_NODE_BGCOLOR = "#373737";
    NODE_DEFAULT_IO_COLOR = "#999";
    NODE_OPTIONAL_IO_COLOR = "#777";
    NODE_DEFAULT_BOXCOLOR = "#373737";
    NODE_ACTIVE_BOXCOLOR = "#AEF";
    NODE_DEFAULT_SHAPE = "box";
    TITLE_TEXT_FONT = "bold 13px Arial";
    INNER_TEXT_FONT = "normal 12px Arial";
    SHADOWS_WIDTH = 2;
    MENU_TEXT_COLOR = "#BBD";
    MENU_BG_COLOR = "#353535";
    BG_IMAGE = "/images/node-editor/grid.png";
    NODE_IMAGES_PATH = "";

    RENDER_CONNECTION_ARROWS = true;
    CONNECTIONS_WIDTH = 4;
    CONNECTIONS_SHADOW = 4;

    SELECTION_COLOR = "#FFF";
    SELECTION_WIDTH = 2;
    DATATYPE_COLOR = {
        0: "#AAA",
        1: "#AAA",
        2: "#AAA"
    };
    NEW_LINK_COLOR = "#CCC";
    LINK_TYPE_COLORS = { 0: "#AAC", 1: "#AAC", 2: "#AAC" };

    LINK_COLORS = ["#AAC", "#ACA", "#CAA"];

    NODE_COLORS = {
        "red": { color: "#FAA", bgcolor: "#A44" },
        "green": { color: "#AFA", bgcolor: "#4A4" },
        "blue": { color: "#AAF", bgcolor: "#44A" },
        "white": { color: "#FFF", bgcolor: "#AAA" }
    };
}

// --------------  THEME 0 -----------


let theme0 = new RendererTheme();
themes.push(theme0);
theme0.NODE_TITLE_HEIGHT = 16;
theme0.NODE_SLOT_HEIGHT = 15;
theme0.NODE_WIDTH = 150;
theme0.NODE_MIN_WIDTH = 50;
theme0.NODE_COLLAPSED_RADIUS = 10;
theme0.NODE_COLLAPSED_WIDTH = 150;
theme0.NODE_TITLE_COLOR = "#C9CAC4";
theme0.NODE_DEFAULT_COLOR = "#262B2F";
theme0.NODE_DEFAULT_BGCOLOR = "#464B4F";
theme0.CONTAINER_NODE_COLOR = "#464B4F";
theme0.CONTAINER_NODE_BGCOLOR = "#666B6F";
theme0.IO_NODE_COLOR = "#262B2F";
theme0.IO_NODE_BGCOLOR = "#868B8F";
//theme0.NODE_DEFAULT_BOXCOLOR = "#262B2F";
theme0.NODE_ACTIVE_BOXCOLOR = "#C9CAC4";
theme0.NODE_DEFAULT_IO_COLOR = "#C9CAC4";
theme0.NODE_OPTIONAL_IO_COLOR = "#999A94";
theme0.NODE_DEFAULT_SHAPE = "round";
theme0.SHADOWS_WIDTH = 1;
theme0.MENU_TEXT_COLOR = "#CCC";
theme0.MENU_BG_COLOR = "#262B2F";
theme0.BG_IMAGE = "/images/node-editor/gridA1.png";
theme0.TITLE_TEXT_FONT = "normal 13px Arial";
theme0.INNER_TEXT_FONT = "normal 12px Arial";
theme0.SELECTION_COLOR = "#FFF";
theme0.SELECTION_WIDTH = 2;
theme0.RENDER_CONNECTION_ARROWS = false;
theme0.CONNECTIONS_WIDTH = 3;
theme0.CONNECTIONS_SHADOW = 1;
theme0.DATATYPE_COLOR = { 0: "#EEE", 1: "#9AE", 2: "#EB8" };
theme0.LINK_TYPE_COLORS = { 0: "#EEE", 1: "#9AE", 2: "#EB8" };


// --------------  THEME 1 -----------

let theme1 = new RendererTheme();
themes.push(theme1);
theme1.NODE_TITLE_HEIGHT = 16;
theme1.NODE_SLOT_HEIGHT = 15;
theme1.NODE_WIDTH = 1150;
theme1.NODE_MIN_WIDTH = 50;
theme1.NODE_COLLAPSED_RADIUS = 10;
theme1.NODE_COLLAPSED_WIDTH = 150;
theme1.NODE_TITLE_COLOR = "#B9BAB4";
theme1.NODE_DEFAULT_COLOR = "#262B2F";
theme1.NODE_DEFAULT_BGCOLOR = "#464B4F";
theme1.CONTAINER_NODE_COLOR = "#464B4F";
theme1.CONTAINER_NODE_BGCOLOR = "#666B6F";
theme1.IO_NODE_COLOR = "#262B2F";
theme1.IO_NODE_BGCOLOR = "#868B8F";
//theme1.NODE_DEFAULT_BOXCOLOR = "#363B3F";
theme1.NODE_ACTIVE_BOXCOLOR = "#AAA";
theme1.NODE_DEFAULT_IO_COLOR = "#F5F5F5";
theme1.NODE_OPTIONAL_IO_COLOR = "#CCC";
theme1.NODE_DEFAULT_SHAPE = "box";
theme1.SHADOWS_WIDTH = 1;
theme1.MENU_TEXT_COLOR = "#CCC";
theme1.MENU_BG_COLOR = "#262B2F";
theme1.BG_IMAGE = "/images/node-editor/gridA1.png";
theme1.TITLE_TEXT_FONT = "normal 13px Arial";
theme1.INNER_TEXT_FONT = "normal 12px Arial";
theme1.SELECTION_COLOR = "#FFF";
theme1.SELECTION_WIDTH = 2;
theme1.RENDER_CONNECTION_ARROWS = false;
theme1.CONNECTIONS_WIDTH = 2;
theme1.CONNECTIONS_SHADOW = 1;
theme1.DATATYPE_COLOR = { 0: "#AAA", 1: "#9AB", 2: "#BA9" };
theme1.LINK_TYPE_COLORS = { 0: "#AAA", 1: "#9AB", 2: "#BA9" };


// --------------  THEME 2 -----------

let theme2 = new RendererTheme();
themes.push(theme2);

theme2.NODE_TITLE_HEIGHT = 16;
theme2.NODE_SLOT_HEIGHT = 15;
theme2.NODE_WIDTH = 150;
theme2.NODE_MIN_WIDTH = 50;
theme2.NODE_COLLAPSED_RADIUS = 10;
theme2.NODE_COLLAPSED_WIDTH = 150;
theme2.NODE_TITLE_COLOR = "#B9BAB4";
theme2.NODE_DEFAULT_COLOR = "#464B4F";
theme2.NODE_DEFAULT_BGCOLOR = "#363B3F";
theme2.CONTAINER_NODE_COLOR = "#666B6F";
theme2.CONTAINER_NODE_BGCOLOR = "#464B4F";
theme2.IO_NODE_COLOR = "#464B4F";
theme2.IO_NODE_BGCOLOR = "#767B7F";
//theme2.NODE_DEFAULT_BOXCOLOR = "#363B3F";
theme2.NODE_ACTIVE_BOXCOLOR = "#AAA";
theme2.NODE_DEFAULT_IO_COLOR = "#BBB";
theme2.NODE_OPTIONAL_IO_COLOR = "#999";
theme2.NODE_DEFAULT_SHAPE = "round";
theme2.SHADOWS_WIDTH = 1;
theme2.MENU_TEXT_COLOR = "#CCC";
theme2.MENU_BG_COLOR = "#464B4F";
theme2.BG_IMAGE = "/images/node-editor/gridA3.png";
theme2.TITLE_TEXT_FONT = "normal 13px Arial";
theme2.INNER_TEXT_FONT = "normal 12px Arial";
theme2.SELECTION_COLOR = "#FFF";
theme2.SELECTION_WIDTH = 2;
theme2.RENDER_CONNECTION_ARROWS = false;
theme2.CONNECTIONS_WIDTH = 2;
theme2.CONNECTIONS_SHADOW = 1;
theme2.DATATYPE_COLOR = { 0: "#AAA", 1: "#AAA", 2: "#AAA" };
theme2.LINK_TYPE_COLORS = { 0: "#AAA", 1: "#AAA", 2: "#AAA" };


// --------------  THEME 3 -----------

let theme3 = new RendererTheme();
themes.push(theme3);

theme3.NODE_TITLE_HEIGHT = 16;
theme3.NODE_SLOT_HEIGHT = 15;
theme3.NODE_WIDTH = 150;
theme3.NODE_MIN_WIDTH = 50;
theme3.NODE_COLLAPSED_RADIUS = 10;
theme3.NODE_COLLAPSED_WIDTH = 150;
theme3.NODE_TITLE_COLOR = "#B9BAB4";
theme3.NODE_DEFAULT_COLOR = "#363B3F";
theme3.NODE_DEFAULT_BGCOLOR = "#262B2F";
theme3.CONTAINER_NODE_COLOR = "#565B5F";
theme3.CONTAINER_NODE_BGCOLOR = "#363B3F";
theme3.IO_NODE_COLOR = "#363B3F";
theme3.IO_NODE_BGCOLOR = "#565B5F";
// theme3.NODE_DEFAULT_BOXCOLOR = "#363B3F";
theme3.NODE_ACTIVE_BOXCOLOR = "#AAA";
theme3.NODE_DEFAULT_IO_COLOR = "#BBB";
theme3.NODE_OPTIONAL_IO_COLOR = "#888";
theme3.NODE_DEFAULT_SHAPE = "round";
theme3.SHADOWS_WIDTH = 0;
theme3.MENU_TEXT_COLOR = "#CCC";
theme3.MENU_BG_COLOR = "#262B2F";
theme3.BG_IMAGE = null;
theme3.TITLE_TEXT_FONT = "normal 13px Arial";
theme3.INNER_TEXT_FONT = "normal 12px Arial";
theme3.SELECTION_COLOR = "#FFF";
theme3.SELECTION_WIDTH = 2;
theme3.RENDER_CONNECTION_ARROWS = false;
theme3.CONNECTIONS_WIDTH = 2;
theme3.CONNECTIONS_SHADOW = 1;
theme3.DATATYPE_COLOR = { 0: "#666", 1: "#666", 2: "#666" };
theme3.LINK_TYPE_COLORS = { 0: "#AAA", 1: "#AAA", 2: "#AAA" };


// --------------  THEME 4 -----------

let theme4 = new RendererTheme();
themes.push(theme4);

theme4.NODE_TITLE_HEIGHT = 16;
theme4.NODE_SLOT_HEIGHT = 15;
theme4.NODE_WIDTH = 150;
theme4.NODE_MIN_WIDTH = 50;
theme4.NODE_COLLAPSED_RADIUS = 10;
theme4.NODE_COLLAPSED_WIDTH = 150;
theme4.NODE_TITLE_COLOR = "#363B3F";
theme4.NODE_DEFAULT_COLOR = "#B9BAB9";
theme4.NODE_DEFAULT_BGCOLOR = "#74797D";
theme4.CONTAINER_NODE_COLOR = "#A9AAA9";
theme4.CONTAINER_NODE_BGCOLOR = "#54595D";
theme4.IO_NODE_COLOR = "#B9BAB9";
theme4.IO_NODE_BGCOLOR = "#A4A9AD";
//theme4.NODE_DEFAULT_BOXCOLOR = "#B9BAB9";
theme4.NODE_ACTIVE_BOXCOLOR = "#555";
theme4.NODE_DEFAULT_IO_COLOR = "#F5F5F5";
theme4.NODE_OPTIONAL_IO_COLOR = "#CCC";
theme4.NODE_DEFAULT_SHAPE = "round";
theme4.SHADOWS_WIDTH = 1;
theme4.MENU_TEXT_COLOR = "#CCC";
theme4.MENU_BG_COLOR = "#262B2F";
theme4.BG_IMAGE = null;
theme4.TITLE_TEXT_FONT = "bold 13px Arial";
theme4.INNER_TEXT_FONT = "normal 12px Arial";
theme4.SELECTION_COLOR = "#FFF";
theme4.SELECTION_WIDTH = 2;
theme4.RENDER_CONNECTION_ARROWS = false;
theme4.CONNECTIONS_WIDTH = 2;
theme4.CONNECTIONS_SHADOW = 1;
theme4.DATATYPE_COLOR = { 0: "#AAA", 1: "#AAA", 2: "#AAA" };
theme4.LINK_TYPE_COLORS = { 0: "#AAA", 1: "#AAA", 2: "#AAA" };


// --------------  THEME 5 -----------

let theme5 = new RendererTheme();
themes.push(theme5);

theme5.NODE_TITLE_HEIGHT = 16;
theme5.NODE_SLOT_HEIGHT = 15;
theme5.NODE_WIDTH = 150;
theme5.NODE_MIN_WIDTH = 50;
theme5.NODE_COLLAPSED_RADIUS = 10;
theme5.NODE_COLLAPSED_WIDTH = 150;
theme5.NODE_TITLE_COLOR = "#3E454D";
theme5.NODE_DEFAULT_COLOR = "#FFFBF6";
theme5.NODE_DEFAULT_BGCOLOR = "#CFCBC6";
theme5.CONTAINER_NODE_COLOR = "#CFCBC6";
theme5.CONTAINER_NODE_BGCOLOR = "#AFABA6";
theme5.IO_NODE_COLOR = "#FFFBF6";
theme5.IO_NODE_BGCOLOR = "#EFEBE6";
//theme5.NODE_DEFAULT_BOXCOLOR = "#FFFBF6";
theme5.NODE_ACTIVE_BOXCOLOR = "#555";
theme5.NODE_DEFAULT_IO_COLOR = "#3E454D";
theme5.NODE_OPTIONAL_IO_COLOR = "#777";
theme5.NODE_DEFAULT_SHAPE = "round";
theme5.SHADOWS_WIDTH = 1;
theme5.MENU_TEXT_COLOR = "#CCC";
theme5.MENU_BG_COLOR = "#262B2F";
theme5.BG_IMAGE = "/images/node-editor/bg1.png";
theme5.TITLE_TEXT_FONT = "normal 13px Arial";
theme5.INNER_TEXT_FONT = "normal 12px Arial";
theme5.SELECTION_COLOR = "#FFF";
theme5.SELECTION_WIDTH = 2;
theme5.RENDER_CONNECTION_ARROWS = false;
theme5.CONNECTIONS_WIDTH = 3;
theme5.CONNECTIONS_SHADOW = 1;
theme5.DATATYPE_COLOR = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };
theme5.LINK_TYPE_COLORS = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };


// --------------  THEME 6 -----------

let theme6 = new RendererTheme();
themes.push(theme6);

theme6.NODE_TITLE_HEIGHT = 16;
theme6.NODE_SLOT_HEIGHT = 15;
theme6.NODE_WIDTH = 150;
theme6.NODE_MIN_WIDTH = 50;
theme6.NODE_COLLAPSED_RADIUS = 10;
theme6.NODE_COLLAPSED_WIDTH = 150;
theme6.NODE_TITLE_COLOR = "#EEE";
theme6.NODE_DEFAULT_COLOR = "#444";
theme6.NODE_DEFAULT_BGCOLOR = "#EEE";
theme6.CONTAINER_NODE_COLOR = "#444";
theme6.CONTAINER_NODE_BGCOLOR = "#BBB";
theme6.IO_NODE_COLOR = "#444";
theme6.IO_NODE_BGCOLOR = "#EEE";
//theme6.NODE_DEFAULT_BOXCOLOR = "#444";
theme6.NODE_ACTIVE_BOXCOLOR = "#EEE";
theme6.NODE_DEFAULT_IO_COLOR = "#000";
theme6.NODE_OPTIONAL_IO_COLOR = "#888";
theme6.NODE_DEFAULT_SHAPE = "round";
theme6.SHADOWS_WIDTH = 1;
theme6.MENU_TEXT_COLOR = "#CCC";
theme6.MENU_BG_COLOR = "#262B2F";
// theme6.BG_IMAGE = "/images/node-editor/gridA0.png";
theme6.BG_IMAGE = null;
theme6.TITLE_TEXT_FONT = "normal 13px Arial";
theme6.INNER_TEXT_FONT = "normal 12px Arial";
theme6.SELECTION_COLOR = "#000";
theme6.SELECTION_WIDTH = 3;
theme6.RENDER_CONNECTION_ARROWS = false;
theme6.CONNECTIONS_WIDTH = 2;
theme6.CONNECTIONS_SHADOW = 2;
theme6.DATATYPE_COLOR = { 0: "#FFF", 1: "#9AF", 2: "#FB8" };
theme6.LINK_TYPE_COLORS = { 0: "#FFF", 1: "#9AF", 2: "#FB8" };


// --------------  THEME 7 -----------

let theme7 = new RendererTheme();
themes.push(theme7);

theme7.NODE_TITLE_HEIGHT = 16;
theme7.NODE_SLOT_HEIGHT = 15;
theme7.NODE_WIDTH = 150;
theme7.NODE_MIN_WIDTH = 50;
theme7.NODE_COLLAPSED_RADIUS = 10;
theme7.NODE_COLLAPSED_WIDTH = 150;
theme7.NODE_TITLE_COLOR = "#3E454D";
theme7.NODE_DEFAULT_COLOR = "#FFFBF6";
theme7.NODE_DEFAULT_BGCOLOR = "#CFCBC6";
theme7.CONTAINER_NODE_COLOR = "#CFCBC6";
theme7.CONTAINER_NODE_BGCOLOR = "#EFEBE6";
theme7.IO_NODE_COLOR = "#FFFBF6";
theme7.IO_NODE_BGCOLOR = "#EFEBE6";
//theme7.NODE_DEFAULT_BOXCOLOR = "#FFFBF6";
theme7.NODE_ACTIVE_BOXCOLOR = "#444";
theme7.NODE_DEFAULT_IO_COLOR = "#3E454D";
theme7.NODE_OPTIONAL_IO_COLOR = "#777";
theme7.NODE_DEFAULT_SHAPE = "round";
theme7.SHADOWS_WIDTH = 1;
theme7.MENU_TEXT_COLOR = "#CCC";
theme7.MENU_BG_COLOR = "#262B2F";
theme7.BG_IMAGE = "/images/node-editor/bg1.png";
theme7.TITLE_TEXT_FONT = "normal 13px Arial";
theme7.INNER_TEXT_FONT = "normal 12px Arial";
theme7.SELECTION_COLOR = "#FFF";
theme7.SELECTION_WIDTH = 2;
theme7.RENDER_CONNECTION_ARROWS = false;
theme7.CONNECTIONS_WIDTH = 3;
theme7.CONNECTIONS_SHADOW = 1;
theme7.DATATYPE_COLOR = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };
theme7.LINK_TYPE_COLORS = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };


// --------------  THEME 8 -----------

let theme8 = new RendererTheme();
themes.push(theme8);

theme8.NODE_TITLE_HEIGHT = 16;
theme8.NODE_SLOT_HEIGHT = 15;
theme8.NODE_WIDTH = 150;
theme8.NODE_MIN_WIDTH = 50;
theme8.NODE_COLLAPSED_RADIUS = 10;
theme8.NODE_COLLAPSED_WIDTH = 150;
theme8.NODE_TITLE_COLOR = "#F9EEDE";
theme8.NODE_DEFAULT_COLOR = "#A0A099";
theme8.NODE_DEFAULT_BGCOLOR = "#F0F0E9";
theme8.CONTAINER_NODE_COLOR = "#A0A099";
theme8.CONTAINER_NODE_BGCOLOR = "#DFDBD6";
theme8.IO_NODE_COLOR = "#A0A099";
theme8.IO_NODE_BGCOLOR = "#EFEBE6";
// theme8.NODE_DEFAULT_BOXCOLOR = "#A0A099";
theme8.NODE_ACTIVE_BOXCOLOR = "#F0F0E9";
theme8.NODE_DEFAULT_IO_COLOR = "#3E454D";
theme8.NODE_OPTIONAL_IO_COLOR = "#777";
theme8.NODE_DEFAULT_SHAPE = "round";
theme8.SHADOWS_WIDTH = 1;
theme8.MENU_TEXT_COLOR = "#DDD";
theme8.MENU_BG_COLOR = "#606059";
theme8.BG_IMAGE = null;
theme8.TITLE_TEXT_FONT = "normal 13px Arial";
theme8.INNER_TEXT_FONT = "normal 12px Arial";
theme8.SELECTION_COLOR = "#FFF";
theme8.SELECTION_WIDTH = 2;
theme8.RENDER_CONNECTION_ARROWS = false;
theme8.CONNECTIONS_WIDTH = 3;
theme8.CONNECTIONS_SHADOW = 1;
theme8.DATATYPE_COLOR = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };
theme8.LINK_TYPE_COLORS = { 0: "#FFF", 1: "#9AC", 2: "#FB8" };
