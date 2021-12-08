import { EnumForm } from '@/enums/EnumForm.js'

const form = EnumForm.of('Alcremie').addFlags('FakeForm')

export class EnumAlcremie {
  public static readonly StrawBerry = form
    .clone()
    .setForm(0)
    .setSpriteSuffix('-strawberry-vanilla')
    .setImageSuffix('-vanilla-cream-strawberry')
  public static readonly StrawBerryRubyCream = form
    .clone()
    .setForm(1)
    .setSpriteSuffix('-strawberry-rubycream')
    .setImageSuffix('-ruby-cream-strawberry')
  public static readonly StrawBerryMatcha = form
    .clone()
    .setForm(2)
    .setSpriteSuffix('-strawberry-matcha')
    .setImageSuffix('-matcha-cream-strawberry')
  public static readonly StrawBerryMint = form
    .clone()
    .setForm(3)
    .setSpriteSuffix('-strawberry-mint')
    .setImageSuffix('-mint-cream-strawberry')
  public static readonly StrawBerryLemon = form
    .clone()
    .setForm(4)
    .setSpriteSuffix('-strawberry-lemon')
    .setImageSuffix('-lemon-cream-strawberry')
  public static readonly StrawBerrySalted = form
    .clone()
    .setForm(5)
    .setSpriteSuffix('-strawberry-salted')
    .setImageSuffix('-salted-cream-strawberry')
  public static readonly StrawBerryRubySwirl = form
    .clone()
    .setForm(6)
    .setSpriteSuffix('-strawberry-rubyswirl')
    .setImageSuffix('-ruby-swirl-strawberry')
  public static readonly StrawBerryCaramel = form
    .clone()
    .setForm(7)
    .setSpriteSuffix('-strawberry-caramel')
    .setImageSuffix('-caramel-swirl-strawberry')
  public static readonly StrawBerryRainbow = form
    .clone()
    .setForm(8)
    .setSpriteSuffix('-strawberry-rainbow')
    .setImageSuffix('-rainbow-swirl-strawberry')

  public static readonly Berry = form
    .clone()
    .setForm(9)
    .setSpriteSuffix('-berry-vanilla')
    .setImageSuffix('-vanilla-cream-berry')
  public static readonly BerryRubyCream = form
    .clone()
    .setForm(10)
    .setSpriteSuffix('-berry-rubycream')
    .setImageSuffix('-ruby-cream-berry')
  public static readonly BerryMatcha = form
    .clone()
    .setForm(11)
    .setSpriteSuffix('-berry-matcha')
    .setImageSuffix('-matcha-cream-berry')
  public static readonly BerryMint = form
    .clone()
    .setForm(12)
    .setSpriteSuffix('-berry-mint')
    .setImageSuffix('-mint-cream-berry')
  public static readonly BerryLemon = form
    .clone()
    .setForm(13)
    .setSpriteSuffix('-berry-lemon')
    .setImageSuffix('-lemon-cream-berry')
  public static readonly BerrySalted = form
    .clone()
    .setForm(14)
    .setSpriteSuffix('-berry-salted')
    .setImageSuffix('-salted-cream-berry')
  public static readonly BerryRubySwirl = form
    .clone()
    .setForm(15)
    .setSpriteSuffix('-berry-rubyswirl')
    .setImageSuffix('-ruby-swirl-berry')
  public static readonly BerryCaramel = form
    .clone()
    .setForm(16)
    .setSpriteSuffix('-berry-caramel')
    .setImageSuffix('-caramel-swirl-berry')
  public static readonly BerryRainbow = form
    .clone()
    .setForm(17)
    .setSpriteSuffix('-berry-rainbow')
    .setImageSuffix('-rainbow-swirl-berry')

  public static readonly Love = form
    .clone()
    .setForm(18)
    .setSpriteSuffix('-love-vanilla')
    .setImageSuffix('-vanilla-cream-love')
  public static readonly LoveRubyCream = form
    .clone()
    .setForm(19)
    .setSpriteSuffix('-love-rubycream')
    .setImageSuffix('-ruby-cream-love')
  public static readonly LoveMatcha = form
    .clone()
    .setForm(20)
    .setSpriteSuffix('-love-matcha')
    .setImageSuffix('-matcha-cream-love')
  public static readonly LoveMint = form
    .clone()
    .setForm(21)
    .setSpriteSuffix('-love-mint')
    .setImageSuffix('-mint-cream-love')
  public static readonly LoveLemon = form
    .clone()
    .setForm(22)
    .setSpriteSuffix('-love-lemon')
    .setImageSuffix('-lemon-cream-love')
  public static readonly LoveSalted = form
    .clone()
    .setForm(23)
    .setSpriteSuffix('-love-salted')
    .setImageSuffix('-salted-cream-love')
  public static readonly LoveRubySwirl = form
    .clone()
    .setForm(24)
    .setSpriteSuffix('-love-rubyswirl')
    .setImageSuffix('-ruby-swirl-love')
  public static readonly LoveCaramel = form
    .clone()
    .setForm(25)
    .setSpriteSuffix('-love-caramel')
    .setImageSuffix('-caramel-swirl-love')
  public static readonly LoveRainbow = form
    .clone()
    .setForm(26)
    .setSpriteSuffix('-love-rainbow')
    .setImageSuffix('-rainbow-swirl-love')

  public static readonly Star = form
    .clone()
    .setForm(27)
    .setSpriteSuffix('-star-vanilla')
    .setImageSuffix('-vanilla-cream-star')
  public static readonly StarRubyCream = form
    .clone()
    .setForm(28)
    .setSpriteSuffix('-star-rubycream')
    .setImageSuffix('-ruby-cream-star')
  public static readonly StarMatcha = form
    .clone()
    .setForm(29)
    .setSpriteSuffix('-star-matcha')
    .setImageSuffix('-matcha-cream-star')
  public static readonly StarMint = form
    .clone()
    .setForm(30)
    .setSpriteSuffix('-star-mint')
    .setImageSuffix('-mint-cream-star')
  public static readonly StarLemon = form
    .clone()
    .setForm(31)
    .setSpriteSuffix('-star-lemon')
    .setImageSuffix('-lemon-cream-star')
  public static readonly StarSalted = form
    .clone()
    .setForm(32)
    .setSpriteSuffix('-star-salted')
    .setImageSuffix('-salted-cream-star')
  public static readonly StarRubySwirl = form
    .clone()
    .setForm(33)
    .setSpriteSuffix('-star-rubyswirl')
    .setImageSuffix('-ruby-swirl-star')
  public static readonly StarCaramel = form
    .clone()
    .setForm(34)
    .setSpriteSuffix('-star-caramel')
    .setImageSuffix('-caramel-swirl-star')
  public static readonly StarRainbow = form
    .clone()
    .setForm(35)
    .setSpriteSuffix('-star-rainbow')
    .setImageSuffix('-rainbow-swirl-star')

  public static readonly Clover = form
    .clone()
    .setForm(36)
    .setSpriteSuffix('-clover-vanilla')
    .setImageSuffix('-vanilla-cream-clover')
  public static readonly CloverRubyCream = form
    .clone()
    .setForm(37)
    .setSpriteSuffix('-clover-rubycream')
    .setImageSuffix('-ruby-cream-clover')
  public static readonly CloverMatcha = form
    .clone()
    .setForm(38)
    .setSpriteSuffix('-clover-matcha')
    .setImageSuffix('-matcha-cream-clover')
  public static readonly CloverMint = form
    .clone()
    .setForm(39)
    .setSpriteSuffix('-clover-mint')
    .setImageSuffix('-mint-cream-clover')
  public static readonly CloverLemon = form
    .clone()
    .setForm(40)
    .setSpriteSuffix('-clover-lemon')
    .setImageSuffix('-lemon-cream-clover')
  public static readonly CloverSalted = form
    .clone()
    .setForm(41)
    .setSpriteSuffix('-clover-salted')
    .setImageSuffix('-salted-cream-clover')
  public static readonly CloverRubySwirl = form
    .clone()
    .setForm(42)
    .setSpriteSuffix('-clover-rubyswirl')
    .setImageSuffix('-ruby-swirl-clover')
  public static readonly CloverCaramel = form
    .clone()
    .setForm(43)
    .setSpriteSuffix('-clover-caramel')
    .setImageSuffix('-caramel-swirl-clover')
  public static readonly CloverRainbow = form
    .clone()
    .setForm(44)
    .setSpriteSuffix('-clover-rainbow')
    .setImageSuffix('-rainbow-swirl-clover')

  public static readonly Flower = form
    .clone()
    .setForm(45)
    .setSpriteSuffix('-flower-vanilla')
    .setImageSuffix('-vanilla-cream-flower')
  public static readonly FlowerRubyCream = form
    .clone()
    .setForm(46)
    .setSpriteSuffix('-flower-rubycream')
    .setImageSuffix('-ruby-cream-flower')
  public static readonly FlowerMatcha = form
    .clone()
    .setForm(47)
    .setSpriteSuffix('-flower-matcha')
    .setImageSuffix('-matcha-cream-flower')
  public static readonly FlowerMint = form
    .clone()
    .setForm(48)
    .setSpriteSuffix('-flower-mint')
    .setImageSuffix('-mint-cream-flower')
  public static readonly FlowerLemon = form
    .clone()
    .setForm(49)
    .setSpriteSuffix('-flower-lemon')
    .setImageSuffix('-lemon-cream-flower')
  public static readonly FlowerSalted = form
    .clone()
    .setForm(50)
    .setSpriteSuffix('-flower-salted')
    .setImageSuffix('-salted-cream-flower')
  public static readonly FlowerRubySwirl = form
    .clone()
    .setForm(51)
    .setSpriteSuffix('-flower-rubyswirl')
    .setImageSuffix('-ruby-swirl-flower')
  public static readonly FlowerCaramel = form
    .clone()
    .setForm(52)
    .setSpriteSuffix('-flower-caramel')
    .setImageSuffix('-caramel-swirl-flower')
  public static readonly FlowerRainbow = form
    .clone()
    .setForm(53)
    .setSpriteSuffix('-flower-rainbow')
    .setImageSuffix('-rainbow-swirl-flower')

  public static readonly Ribbon = form
    .clone()
    .setForm(54)
    .setSpriteSuffix('-ribbon-vanilla')
    .setImageSuffix('-vanilla-cream-ribbon')
  public static readonly RibbonRubyCream = form
    .clone()
    .setForm(55)
    .setSpriteSuffix('-ribbon-rubycream')
    .setImageSuffix('-ruby-cream-ribbon')
  public static readonly RibbonMatcha = form
    .clone()
    .setForm(56)
    .setSpriteSuffix('-ribbon-matcha')
    .setImageSuffix('-matcha-cream-ribbon')
  public static readonly RibbonMint = form
    .clone()
    .setForm(57)
    .setSpriteSuffix('-ribbon-mint')
    .setImageSuffix('-mint-cream-ribbon')
  public static readonly RibbonLemon = form
    .clone()
    .setForm(58)
    .setSpriteSuffix('-ribbon-lemon')
    .setImageSuffix('-lemon-cream-ribbon')
  public static readonly RibbonSalted = form
    .clone()
    .setForm(59)
    .setSpriteSuffix('-ribbon-salted')
    .setImageSuffix('-salted-cream-ribbon')
  public static readonly RibbonRubySwirl = form
    .clone()
    .setForm(60)
    .setSpriteSuffix('-ribbon-rubyswirl')
    .setImageSuffix('-ruby-swirl-ribbon')
  public static readonly RibbonCaramel = form
    .clone()
    .setForm(61)
    .setSpriteSuffix('-ribbon-caramel')
    .setImageSuffix('-caramel-swirl-ribbon')
  public static readonly RibbonRainbow = form
    .clone()
    .setForm(62)
    .setSpriteSuffix('-ribbon-rainbow')
    .setImageSuffix('-rainbow-swirl-ribbon')

  public static values(): EnumForm[] {
    return [
      this.StrawBerry,
      this.StrawBerryRubyCream,
      this.StrawBerryMatcha,
      this.StrawBerryMint,
      this.StrawBerryLemon,
      this.StrawBerrySalted,
      this.StrawBerryRubySwirl,
      this.StrawBerryCaramel,
      this.StrawBerryRainbow,
      this.Berry,
      this.BerryRubyCream,
      this.BerryMatcha,
      this.BerryMint,
      this.BerryLemon,
      this.BerrySalted,
      this.BerryRubySwirl,
      this.BerryCaramel,
      this.BerryRainbow,
      this.Love,
      this.LoveRubyCream,
      this.LoveMatcha,
      this.LoveMint,
      this.LoveLemon,
      this.LoveSalted,
      this.LoveRubySwirl,
      this.LoveCaramel,
      this.LoveRainbow,
      this.Star,
      this.StarRubyCream,
      this.StarMatcha,
      this.StarMint,
      this.StarLemon,
      this.StarSalted,
      this.StarRubySwirl,
      this.StarCaramel,
      this.StarRainbow,
      this.Clover,
      this.CloverRubyCream,
      this.CloverMatcha,
      this.CloverMint,
      this.CloverLemon,
      this.CloverSalted,
      this.CloverRubySwirl,
      this.CloverCaramel,
      this.CloverRainbow,
      this.Flower,
      this.FlowerRubyCream,
      this.FlowerMatcha,
      this.FlowerMint,
      this.FlowerLemon,
      this.FlowerSalted,
      this.FlowerRubySwirl,
      this.FlowerCaramel,
      this.FlowerRainbow,
      this.Ribbon,
      this.RibbonRubyCream,
      this.RibbonMatcha,
      this.RibbonMint,
      this.RibbonLemon,
      this.RibbonSalted,
      this.RibbonRubySwirl,
      this.RibbonCaramel,
      this.RibbonRainbow
    ]
  }
}