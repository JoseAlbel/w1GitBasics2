class Lamp {
  private hasBubble: boolean;

  private isOn: boolean;

  public turnOn(): void {
    this.isOn = true;
  }

  public turnOff(): void {
    this.isOn = false;
  }
}
