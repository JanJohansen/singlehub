import {Nodes, Node} from "../nodes";
/**
 * Created by derwish on 11.02.17.
 */




//Watch a value in the editor
export class Watch extends Node {
    constructor() {
        super();
        this.title = "Watch";
        this.desc = "Show value of input";
        this.size = [60, 20];
        this.addInput("value", null, {label: ""});
        this.addOutput("value", null, {label: ""});
    }

    onExecute() {
        let val = this.getInputData(0);
        this.setOutputData(0, val);
        this.sendMessageToFrontSide({value: val});
    }

    onGetMessageFromBackSide = function (data) {
        this.properties.value = data.value;
        this.showValueOnInput(data.value);
    };

    showValueOnInput(value: any) {
        //show the current value
        if (value) {
            if (typeof (value) == "number")
                this.inputs[0].label = value.toFixed(3);
            else {
                let str = value;
                if (str && str.length) //convert typed to array
                    str = Array.prototype.slice.call(str).join(",");
                this.inputs[0].label = str;

            }
        }
        else this.inputs[0].label = "";

        this.setDirtyCanvas(true, false);
    }
}
Nodes.registerNodeType("debug/watch", Watch);

//Show value inside the debug console
export class Console extends Node {
    constructor() {
        super();
        this.title = "Console";
        this.desc = "Show value inside the console";
        this.size = [60, 20];
        this.addInput("data");
    }

    oldVal: any;

    onExecute = function () {
        let val = this.getInputData(0);
        if (val != this.oldVal) {
            console.log("CONSOLE NODE: " + val);
            this.isActive = true;
            this.oldVal = val;
        }
    }
}
Nodes.registerNodeType("debug/console", Console);

