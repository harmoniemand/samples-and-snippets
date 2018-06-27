
export class Snipped {

    GetOffset(from: any, to: any): any {
        let pos = { X: 0, Y: 0 };

        var parent = from.offsetParent;
        pos.X = from.offsetTop;
        pos.Y = from.offsetLeft;

        var el = from;
        while (el != parent) {
            pos.X = pos.X - el.scrollTop;
            pos.Y = pos.Y - el.scrollLeft;
            el = el.parentNode;
        }

        if (parent != to) {
            const parentOffset = this.GetOffset(parent, to);
            pos.X = pos.X + parentOffset.X;
            pos.Y = pos.Y + parentOffset.Y;
        }

        return pos;
    }
}
