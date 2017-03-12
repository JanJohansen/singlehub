/**
 * Created by Derwish (derwish.pro@gmail.com) on 07.03.17.
 * License: http://www.gnu.org/licenses/gpl-3.0.txt
 */

import {Node} from "../node";
import {Container} from "../container";
import Utils from "../utils";


class AndNode extends Node {
    constructor() {
        super();

        this.title = "AND";
        this.descriprion = "This node performs a logical \"AND\" operation. ";

        this.addInput("a", "boolean");
        this.addInput("b", "boolean");
        this.addOutput("a && b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a && b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/and", AndNode);




class OrNode extends Node {
    constructor() {
        super();

        this.title = "OR";
        this.descriprion = "This node performs a logical \"OR\" operation. ";

        this.addInput("a", "boolean");
        this.addInput("b", "boolean");
        this.addOutput("a || b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a || b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/or", OrNode);



class EqualNode extends Node {
    constructor() {
        super();

        this.title = "Equal";
        this.descriprion = "This node compares two values and sends \"true\" to the output " +
            "if the values are equal, or \"false\" if not equal. <br/>" +
            "It can compare text or numbers. <br/>" +
            "For example, the node will assume that \"1\" and \"1.0\" are equal. <br/>" +
            "\"Hello\" and \"HELLO\" are not equal. ";

        this.addInput("a");
        this.addInput("b");
        this.addOutput("a == b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a == b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/equal", EqualNode);




class NotNode extends Node {
    constructor() {
        super();

        this.title = "NOT";
        this.descriprion = "This node works the opposite of how the Equal node works.";

        this.addInput("a", "boolean");
        this.addInput("b", "boolean");
        this.addOutput("a != b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a != b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/not", NotNode);





class MaxNode extends Node {
    constructor() {
        super();

        this.title = "Max";
        this.descriprion = "Compares two numbers and return the highest value.";

        this.addInput("a", "number");
        this.addInput("b", "number");
        this.addOutput("max(a,b)", "number");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, Math.max(a, b));
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/max", MaxNode);





class MinNode extends Node {
    constructor() {
        super();

        this.title = "Min";
        this.descriprion = "Compares two numbers and return the lowest value.";

        this.addInput("a", "number");
        this.addInput("b", "number");
        this.addOutput("min(a,b)", "number");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, Math.min(a, b));
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/min", MinNode);



class GreaterNode extends Node {
    constructor() {
        super();

        this.title = "Greater";
        this.descriprion = "This node compares two values and sends \"true\" to the output " +
            "if the first value is greater than the second, or \"false\" if not. <br/>" +
            "It can compare only numbers. ";

        this.addInput("a", "number");
        this.addInput("b", "number");
        this.addOutput("a > b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a > b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/greater", GreaterNode);





class LowerNode extends Node {
    constructor() {
        super();

        this.title = "Lower";
        this.descriprion = "This node works the opposite of how the Greater node works.";

        this.addInput("a", "number");
        this.addInput("b", "number");
        this.addOutput("a < b", "boolean");
    }

    onInputUpdated() {
        let a = this.getInputData(0);
        let b = this.getInputData(1);

        if (a != null && b != null)
            this.setOutputData(0, a < b);
        else
            this.setOutputData(0, null);
    }
}
Container.registerNodeType("compare/lower", LowerNode);
