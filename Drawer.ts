export class Drawer {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private scale: number;

    constructor(width: number, height: number, scale: number){
        console.log("Drawer.ts: Initializing Drawer");
        this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        if (!this.canvas) {
            throw new Error('Drawer.ts: Canvas element not found');
        }
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d')!;
        this.scale = scale;
        console.log(`Drawer.ts: Canvas initialized with width ${width} and height ${height}`);
    }

    public clear(): void {
        console.log("Drawer.ts: Clearing canvas");
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public drawCircle(x: number, y: number, color: string, size: number = 25): void {
        console.log(`Drawer.ts: Drawing Circle at (${x}, ${y}) with color ${color} and size ${size}`);
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.arc(x, y, size, 0, Math.PI * 2);
        this.context.fill();
    }

    public drawRectangle(x: number, y: number, color: string, size: number = 50): void {
        console.log(`Drawer.ts: Drawing Rectangle at (${x}, ${y}) with color ${color} and size ${size}`);
        this.context.fillStyle = color;
        this.context.fillRect(x, y, size, size);
    }

    public drawDiamond(x: number, y: number, color: string, size: number = 50): void {
        console.log(`Drawer.ts: Drawing Diamond at (${x}, ${y}) with color ${color} and size ${size}`);
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.moveTo(x, y - size / 2);
        this.context.lineTo(x + size / 2, y);
        this.context.lineTo(x, y + size / 2);
        this.context.lineTo(x - size / 2, y);
        this.context.closePath();
        this.context.fill();
    }
}