/**
 * Created by Derwish (derwish.pro@gmail.com) on 02.07.2016.
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../nodes/nodes", "../../nodes/nodes-engine"], factory);
    }
})(function (require, exports) {
    "use strict";
    const nodes_1 = require("../../nodes/nodes");
    const nodes_engine_1 = require("../../nodes/nodes-engine");
    class NodeEditorSocket {
        constructor() {
            this.engine = nodes_engine_1.engine;
            let socket = io();
            // socket.emit('chat message', "h1");
            socket.on('node position update', function (n) {
                console.log("node position update " + JSON.stringify(n));
                let node = nodes_engine_1.engine.getNodeById(n.id);
                if (node.pos != n.pos) {
                    node.pos = n.pos;
                    node.setDirtyCanvas(true, true);
                }
            });
        }
        c() {
            //configure socket.io
            this.socket = io.connect('/nodeeditor');
            this.socket.on('connect', function () {
                //todo socket.join(this_panel_id);
                if (this.socketConnected == false) {
                    noty({ text: 'Connected to web server.', type: 'alert' });
                    //waiting while server initialized and read db
                    setTimeout(function () {
                        this.getNodes();
                        this.getGatewayInfo();
                        $("#main").fadeIn(300);
                    }, 2000);
                }
                this.socketConnected = true;
            });
            this.socket.on('disconnect', function () {
                $("#main").fadeOut(300);
                noty({ text: 'Web server is not responding!', type: 'error' });
                this.socketConnected = false;
            });
            this.socket.on('gatewayConnected', function () {
                noty({ text: 'Gateway connected.', type: 'alert', timeout: false });
            });
            this.socket.on('gatewayDisconnected', function () {
                noty({ text: 'Gateway disconnected!', type: 'error', timeout: false });
            });
            this.socket.on('removeAllNodesAndLinks', function () {
                this.engine.clear();
                window.location.replace("/NodeEditor/");
                noty({ text: 'All nodes have been deleted!', type: 'error' });
            });
            this.socket.on('nodeActivity', function (nodeId) {
                let node = this.engine.getNodeById(nodeId);
                if (node == null)
                    return;
                node.boxcolor = nodes_1.Nodes.options.NODE_ACTIVE_BOXCOLOR;
                node.setDirtyCanvas(true, true);
                setTimeout(function () {
                    node.boxcolor = nodes_1.Nodes.options.NODE_DEFAULT_BOXCOLOR;
                    node.setDirtyCanvas(true, true);
                }, 100);
            });
            this.socket.on('removeNode', function (nodeId) {
                //if current panel removed
                if (nodeId == window.this_panel_id) {
                    window.location = "/NodeEditor/";
                }
                let node = this.engine.getNodeById(nodeId);
                if (node == null)
                    return;
                this.engine.remove(node);
                this.engine.setDirtyCanvas(true, true);
            });
            this.socket.on('nodeUpdated', function (node) {
                if (node.panel_id != window.this_panel_id)
                    return;
                this.createOrUpdateNode(node);
            });
            this.socket.on('newNode', function (node) {
                if (node.panel_id != window.this_panel_id)
                    return;
                this.createOrUpdateNode(node);
            });
            this.socket.on('removeLink', function (link) {
                if (link.panel_id != window.this_panel_id)
                    return;
                //let node = graph.getNodeById(link.origin_id);
                let targetNode = this.engine.getNodeById(link.target_id);
                //node.disconnectOutput(link.target_slot, targetNode);
                targetNode.disconnectInput(link.target_slot);
            });
            this.socket.on('newLink', function (link) {
                if (link.panel_id != window.this_panel_id)
                    return;
                let node = this.engine.getNodeById(link.origin_id);
                let targetNode = this.engine.getNodeById(link.target_id);
                node.connect(link.origin_slot, targetNode, link.target_slot, link.id);
                //  graph.change();
            });
            this.getNodes();
            // this.getGatewayInfo();
            $("#sendButton").click(function () {
                //console.log(graph);
                let gr = JSON.stringify(this.engine.serialize());
                $.ajax({
                    url: '/NodeEditorAPI/PutGraph',
                    type: 'POST',
                    data: { json: gr.toString() }
                }).done(function () {
                });
            });
            $("#fullscreen-button").click(function () {
                // editor.goFullscreen();
                let elem = document.documentElement;
                let fullscreenElement = document.fullscreenElement ||
                    document.mozFullscreenElement ||
                    document.webkitFullscreenElement;
                if (fullscreenElement == null) {
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    }
                    else if (elem.mozRequestFullScreen) {
                        elem.mozRequestFullScreen();
                    }
                    else if (elem.webkitRequestFullscreen) {
                        elem.webkitRequestFullscreen();
                    }
                }
                else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    }
                    else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    }
                    else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            });
        }
        getGatewayInfo() {
            $.ajax({
                url: "/MySensorsAPI/GetGatewayInfo/",
                success: function (gatewayInfo) {
                    if (gatewayInfo.state == 1 || gatewayInfo.state == 2) {
                        noty({ text: 'Gateway is not connected!', type: 'error', timeout: false });
                    }
                }
            });
        }
        send_create_link(link) {
            $.ajax({
                url: '/NodeEditorAPI/CreateLink',
                type: 'POST',
                data: { 'link': link }
            }).done(function () {
            });
        }
        ;
        send_remove_link(link) {
            $.ajax({
                url: '/NodeEditorAPI/RemoveLink',
                type: 'POST',
                data: { 'link': link }
            }).done(function () {
            });
        }
        ;
        send_create_node(node) {
            node.size = null; //reset size for autosizing
            let serializedNode = node.serialize();
            $.ajax({
                url: '/NodeEditorAPI/AddNode',
                type: 'POST',
                data: { 'node': serializedNode }
            }).done(function () {
            });
        }
        ;
        send_clone_node(node) {
            $.ajax({
                url: '/NodeEditorAPI/CloneNode',
                type: 'POST',
                data: { 'id': node.id }
            }).done(function () {
            });
        }
        ;
        send_remove_node(node) {
            let serializedNode = node.serialize();
            $.ajax({
                url: '/NodeEditorAPI/RemoveNode',
                type: 'POST',
                data: { 'node': serializedNode }
            }).done(function () {
            });
        }
        ;
        send_remove_nodes(nodes) {
            let array = [];
            for (let n in nodes) {
                array.push(nodes[n].id);
            }
            $.ajax({
                url: '/NodeEditorAPI/RemoveNodes',
                type: 'POST',
                data: { 'nodes': array }
            }).done(function () {
            });
        }
        ;
        send_update_node(node) {
            let s = node.serialize();
            s = JSON.stringify(s);
            $.ajax({
                url: '/NodeEditorAPI/UpdateNode',
                type: 'POST',
                data: { 'node': s }
            }).done(function () {
            });
        }
        ;
        getGraph() {
            $.ajax({
                url: "/NodeEditorAPI/GetGraph",
                success: function (loadedGraph) {
                    this.engine.configure(loadedGraph);
                }
            });
        }
        getNodes() {
            let that = this;
            $.ajax({
                url: "/NodeEditorAPI/GetNodesForPanel",
                data: { 'panelId': window.this_panel_id },
                success: function (nodes) {
                    //that.onReturnNodes(nodes);
                    nodes_engine_1.engine.configure(nodes, false);
                }
            });
        }
        onReturnNodes(nodes) {
            //console.log(nodes);
            if (!nodes)
                return;
            console.log(nodes);
            for (let i = 0; i < nodes.length; i++) {
                this.createOrUpdateNode(nodes[i]);
            }
            this.getLinks();
        }
        createOrUpdateNode(node) {
            let oldNode = this.engine.getNodeById(node.id);
            if (!oldNode) {
                //create new
                let newNode = nodes_1.Nodes.createNode(node.type);
                if (newNode == null) {
                    console.error("Can`t create node of type: [" + node.type + "]");
                    return;
                }
                newNode.title = node.title;
                newNode.inputs = node.inputs;
                newNode.outputs = node.outputs;
                newNode.id = node.id;
                newNode.properties = node.properties;
                //calculate size
                if (node.size)
                    newNode.size = node.size;
                else
                    newNode.size = newNode.computeSize();
                newNode.size[1] = this.calculateNodeMinHeight(newNode);
                //calculate pos
                if (node.pos)
                    newNode.pos = node.pos;
                else
                    newNode.pos = [nodes_1.Nodes.options.START_POS, this.findFreeSpaceY(newNode)];
                this.engine.add(newNode);
            }
            else {
                //update
                oldNode.title = node.title;
                if (node.properties['Name'] != null)
                    oldNode.title += " [" + node.properties['Name'] + "]";
                if (node.properties['PanelName'] != null)
                    oldNode.title = node.properties['PanelName'];
                oldNode.inputs = node.inputs;
                oldNode.outputs = node.outputs;
                oldNode.id = node.id;
                oldNode.properties = node.properties;
                //calculate size
                if (node.size)
                    oldNode.size = node.size;
                else
                    oldNode.size = oldNode.computeSize();
                oldNode.size[1] = this.calculateNodeMinHeight(oldNode);
                //calculate pos
                if (node.pos) {
                    //todo ES6
                    // if (!graph.Editor.graphcanvas.node_dragged)
                    // 	oldNode.pos = node.pos;
                    // else if (!graph.Editor.graphcanvas.selected_nodes[node.id])
                    oldNode.pos = node.pos;
                }
                oldNode.setDirtyCanvas(true, true);
            }
        }
        getLinks() {
            $.ajax({
                url: "/NodeEditorAPI/GetLinks",
                data: { 'panelId': window.this_panel_id },
                success: function (links) {
                    this.onReturnLinks(links);
                }
            });
        }
        onReturnLinks(links) {
            //console.log(nodes);
            if (!links)
                return;
            for (let i = 0; i < links.length; i++) {
                this.createOrUpdateLink(links[i]);
            }
        }
        createOrUpdateLink(link) {
            let target = this.engine.getNodeById(link.target_id);
            this.engine.getNodeById(link.origin_id)
                .connect(link.origin_slot, target, link.target_slot);
            // .connect(link.origin_slot, target, link.target_slot, link.id);
        }
        calculateNodeMinHeight(node) {
            let slotsMax = (node.outputs.length > node.inputs.length) ? node.outputs.length : node.inputs.length;
            if (slotsMax == 0)
                slotsMax = 1;
            let height = nodes_1.Nodes.options.NODE_SLOT_HEIGHT * slotsMax;
            return height + 5;
        }
        findFreeSpaceY(node) {
            let nodes = this.engine._nodes;
            node.pos = [0, 0];
            let result = nodes_1.Nodes.options.START_POS;
            for (let i = 0; i < nodes.length; i++) {
                let needFromY = result;
                let needToY = result + node.size[1];
                if (node.id == nodes[i].id)
                    continue;
                if (!nodes[i].pos)
                    continue;
                if (nodes[i].pos[0] > nodes_1.Nodes.options.NODE_WIDTH + 20 + nodes_1.Nodes.options.START_POS)
                    continue;
                let occupyFromY = nodes[i].pos[1] - nodes_1.Nodes.options.FREE_SPACE_UNDER;
                let occupyToY = nodes[i].pos[1] + nodes[i].size[1];
                if (occupyFromY <= needToY && occupyToY >= needFromY) {
                    result = occupyToY + nodes_1.Nodes.options.FREE_SPACE_UNDER;
                    i = -1;
                }
            }
            return result;
        }
    }
    exports.NodeEditorSocket = NodeEditorSocket;
    exports.socket = new NodeEditorSocket();
});
//# sourceMappingURL=node-editor-socket.js.map