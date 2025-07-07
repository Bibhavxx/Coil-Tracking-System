namespace CoilTrackingSystem.Models
{
    public class CoilData
    {
        public string CoilNo { get; set; }
        public double Thickness { get; set; }
        public int Width { get; set; }
        public int Length { get; set; }
        public double Weight { get; set; }
        public string Grade { get; set; }
        public string TDC { get; set; }
        public string PreviousStage { get; set; }
        public string NextProcess { get; set; }
        public string Process { get; set; }
    }
}
