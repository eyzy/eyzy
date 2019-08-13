
/*!
 * Eyzy vv0.0.1
 * (c) 2019 amsik
 * Released under the MIT License.
 */

import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function cn() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var result = [];
    for (var i = 0; i < names.length; i++) {
        var item = names[i];
        if (!item) {
            continue;
        }
        if (Array.isArray(item) && item.length) {
            result.push(cn.apply(null, item));
        }
        else if ('object' === typeof item) {
            for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
                var _b = item_1[_a], key = _b[0], value = _b[1];
                if (value) {
                    names.push(key);
                }
            }
        }
        else {
            result.push(item);
        }
    }
    return result.join(' ');
}
//# sourceMappingURL=classNames.js.map

var Button = React.memo(function Button(props) {
    var appearance = props.appearance, className = props.className, children = props.children, intent = props.intent, active = props.active, shape = props.shape, type = props.type, size = props.size, fit = props.fit, rest = __rest(props, ["appearance", "className", "children", "intent", "active", "shape", "type", "size", "fit"]);
    var classNames = cn('btn', appearance && "btn-" + appearance, intent && "btn-" + intent, active && "btn-active", shape && "btn-" + shape, size && "btn-" + size, fit && 'btn-fit', className);
    return (React.createElement("button", __assign({ className: classNames }, rest), children));
});
//# sourceMappingURL=Button.js.map

var Group = React.memo(function ButtonGroup(props) {
    var className = props.className, children = props.children, size = props.size, fit = props.fit, rest = __rest(props, ["className", "children", "size", "fit"]);
    var classNames = cn('btn-group', size && "btn-" + size, fit && "btn-group-fit", className);
    return (React.createElement("div", __assign({ className: classNames }, rest), children));
});
//# sourceMappingURL=Group.js.map

//# sourceMappingURL=index.js.map

Button["Group"] = Group;

function parseWidth(width) {
    var parsed = parseInt(width, 10);
    if (!isNaN(parsed)) {
        return parsed + "px";
    }
    return null;
}
var Input = React.memo(function Input(props) {
    console.log('rename size  everywere (!)');
    var className = props.className, intent = props.intent, shape = props.shape, width = props.width, size = props.size, type = props.type, fit = props.fit, rest = __rest(props, ["className", "intent", "shape", "width", "size", "type", "fit"]);
    var classNames = cn('input', intent && "input-" + intent, shape && "input-" + shape, size && "input-" + size, fit && 'input-fit', className);
    var parsedWidth = parseWidth(width);
    var style = !parsedWidth
        ? undefined
        : {
            width: parsedWidth
        };
    return (React.createElement("input", __assign({ className: classNames, type: type || "text", style: style }, rest)));
});
//# sourceMappingURL=Input.js.map

//# sourceMappingURL=index.js.map

var Tab = function (props) {
    return (React.createElement("div", { className: "tabs-content__item" }, props.children || props.tab));
};
var Tab$1 = React.memo(Tab);
//# sourceMappingURL=Tab.js.map

var isTab = function (component) {
    return component && component.type === Tab$1;
};
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.getActiveContent = function () {
            var children = _this.props.children;
            var activeKey = _this.state.activeKey;
            var activeContent = null;
            React.Children.forEach(children, function (child, i) {
                if (child.key === activeKey || i === activeKey) {
                    activeContent = child;
                }
            });
            if (!activeContent) {
                return children[0];
            }
            return activeContent;
        };
        _this.handleChange = function (key) {
            if (_this.props.onChange) {
                _this.props.onChange(key);
            }
            _this.setState({ activeKey: key });
        };
        _this.state = {
            activeKey: props.activeKey || props.children[0].key || 0
        };
        return _this;
    }
    Tabs.getDerivedStateFromProps = function (props) {
        if (props.activeKey) {
            return {
                activeKey: props.activeKey
            };
        }
        return null;
    };
    Tabs.prototype.renderHeader = function () {
        var _this = this;
        var headers = [];
        var activeTabKey = this.state.activeKey;
        React.Children.forEach(this.props.children, function (child, i) {
            if (!isTab(child)) {
                return;
            }
            var key = child.key || i;
            var className = [
                'tabs-header__item',
                key === activeTabKey ? 'active' : ''
            ]
                .filter(Boolean)
                .join(' ');
            headers.push(React.createElement("div", { className: className, onClick: function () { return _this.handleChange(key); }, key: key }, child.props.label));
        });
        return headers;
    };
    Tabs.prototype.render = function () {
        return (React.createElement("div", { className: "tabs" },
            React.createElement("div", { className: "tabs-header" }, this.renderHeader()),
            React.createElement("div", { className: "tabs-content" }, this.getActiveContent())));
    };
    Tabs.Tab = Tab$1;
    return Tabs;
}(React.PureComponent));
//# sourceMappingURL=Tabs.js.map

Tabs.Tab = Tab$1;
//# sourceMappingURL=index.js.map

export { Button, Input, Tabs };
//# sourceMappingURL=eyzy.js.map
