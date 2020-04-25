export class CtRadiologyModel {
  // Changes in the lung parenchyma and pleura
  public hazyIncreasedOpacities: boolean;
  public consolidation: boolean;
  public crazyPavingPattern: boolean;
  public thickenedInterlobularSepta: boolean;
  public airBronchogramSign: boolean;
  public bronchiectasis: boolean;
  public pleuralThickening: boolean;
  public pneumothorax: boolean;
  public fibrousStripes: boolean;

  //Other Localization: Affected lung lobes
  public bilateral: boolean;
  public multilobar: boolean;
  public emphasisOnLowerLobe: boolean;
  public emphasisPeriphery: boolean;
  public emphasisPosterior: boolean;

  // Further findings
  public pleuralEffusion: boolean;
  public pericardialEffusion: boolean;
  public lymphadenopathy: boolean;
  public vascularThickening: boolean;


  constructor(hazyIncreasedOpacities: boolean, consolidation: boolean, crazyPavingPattern: boolean, thickenedInterlobularSepta: boolean, airBronchogramSign: boolean, bronchiectasis: boolean, pleuralThickening: boolean, pneumothorax: boolean, fibrousStripes: boolean, bilateral: boolean, multilobar: boolean, emphasisOnLowerLobe: boolean, emphasisPeriphery: boolean, emphasisPosterior: boolean, pleuralEffusion: boolean, pericardialEffusion: boolean, lymphadenopathy: boolean, vascularThickening: boolean) {
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
