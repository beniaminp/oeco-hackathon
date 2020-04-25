export class CtRadiologyModel {
  // Changes in the lung parenchyma and pleura
  public hazyIncreasedOpacities: number;
  public consolidation: number;
  public crazyPavingPattern: number;
  public thickenedInterlobularSepta: number;
  public airBronchogramSign: number;
  public bronchiectasis: number;
  public pleuralThickening: number;
  public pneumothorax: number;
  public fibrousStripes: number;

  //Other Localization: Affected lung lobes
  public bilateral: number;
  public multilobar: number;
  public emphasisOnLowerLobe: number;
  public emphasisPeriphery: number;
  public emphasisPosterior: number;

  // Further findings
  public pleuralEffusion: number;
  public pericardialEffusion: number;
  public lymphadenopathy: number;
  public vascularThickening: number;


  constructor(hazyIncreasedOpacities: number, consolidation: number, crazyPavingPattern: number, thickenedInterlobularSepta: number, airBronchogramSign: number, bronchiectasis: number, pleuralThickening: number, pneumothorax: number, fibrousStripes: number, bilateral: number, multilobar: number, emphasisOnLowerLobe: number, emphasisPeriphery: number, emphasisPosterior: number, pleuralEffusion: number, pericardialEffusion: number, lymphadenopathy: number, vascularThickening: number) {
    this.hazyIncreasedOpacities = hazyIncreasedOpacities;
    this.consolidation = consolidation;
    this.crazyPavingPattern = crazyPavingPattern;
    this.thickenedInterlobularSepta = thickenedInterlobularSepta;
    this.airBronchogramSign = airBronchogramSign;
    this.bronchiectasis = bronchiectasis;
    this.pleuralThickening = pleuralThickening;
    this.pneumothorax = pneumothorax;
    this.fibrousStripes = fibrousStripes;
    this.bilateral = bilateral;
    this.multilobar = multilobar;
    this.emphasisOnLowerLobe = emphasisOnLowerLobe;
    this.emphasisPeriphery = emphasisPeriphery;
    this.emphasisPosterior = emphasisPosterior;
    this.pleuralEffusion = pleuralEffusion;
    this.pericardialEffusion = pericardialEffusion;
    this.lymphadenopathy = lymphadenopathy;
    this.vascularThickening = vascularThickening;
  }
}
