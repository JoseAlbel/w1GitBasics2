class Lamp {
  private isOn: boolean;

  public turnOn(): void {
    this.isOn = true;
  }

  public turnOff(): void {
    this.isOn = false;
  }

  public switch(): void {
    this.isOn = !this.isOn;
  }
}
