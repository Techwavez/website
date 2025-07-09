import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp,
  FileCheck,
  Target,
  Users,
  Clock,
  MapPin,
  Banknote,
  Briefcase,
  Award,
  Handshake,
  Building2,
  Calculator,
  FileSearch,
  Coins,
  PiggyBank,
  CreditCard,
  Receipt,
  Wallet,
  BadgeEuro,
  FileBarChart,
  Landmark,
  TrendingDown,
  Sparkles,
  Rocket,
  Crown,
  Star,
  Gift,
  Gem,
  Trophy,
  Lightbulb,
  Compass,
  Key,
  Lock,
  Unlock,
  CheckCircle2,
  CircleDollarSign,
  Euro,
  Percent,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Gauge,
  Layers,
  FileText,
  ScrollText,
  ClipboardCheck,
  Search,
  Microscope,
  Telescope,
  Radar,
  Crosshair,
  Focus,
  Eye,
  Binoculars,
  Fingerprint,
  ShieldCheck,
  BadgeCheck,
  Verified,
  Medal,
  Ribbon,
  Flame,
  Zap as ZapIcon,
  Bolt,
  Flash,
  Sunrise,
  Sun,
  Moon,
  Stars,
  Comet,
  Orbit,
  Globe,
  Map,
  Navigation,
  Route,
  Signpost,
  Flag,
  FlagTriangleRight,
  Play,
  FastForward,
  SkipForward,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  Link as LinkIcon,
  Paperclip,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Mail,
  Phone,
  MessageCircle,
  MessageSquare,
  Send,
  Share,
  Upload,
  Download,
  Save,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileType,
  FilePlus,
  FileX,
  FileMinus,
  FileEdit,
  Edit,
  Edit2,
  Edit3,
  Pen,
  PenTool,
  Brush,
  Palette,
  Paintbrush,
  Wand2,
  Magic,
  Sparkle,
  Twinkle,
  Shine,
  Glow,
  Beam,
  Rays,
  Sunbeam,
  Rainbow,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  Droplets,
  Waves,
  Wind,
  Tornado,
  Cyclone,
  Hurricane,
  Storm,
  Thunder,
  Lightning,
  Bolt as BoltIcon,
  Zap as ZapIcon2,
  Flash as FlashIcon,
  Spark,
  Fireworks,
  Confetti,
  Party,
  Celebration,
  Cheers,
  Clap,
  ThumbsUp,
  Heart,
  HeartHandshake,
  Smile,
  Laugh,
  Grin,
  Wink,
  Kiss,
  Hug,
  Peace,
  Victory,
  Ok,
  Good,
  Great,
  Excellent,
  Perfect,
  Amazing,
  Awesome,
  Fantastic,
  Wonderful,
  Brilliant,
  Outstanding,
  Exceptional,
  Remarkable,
  Incredible,
  Unbelievable,
  Extraordinary,
  Phenomenal,
  Spectacular,
  Magnificent,
  Marvelous,
  Superb,
  Supreme,
  Ultimate,
  Premium,
  Luxury,
  Elite,
  VIP,
  Exclusive,
  Special,
  Unique,
  Rare,
  Limited,
  Custom,
  Personal,
  Private,
  Confidential,
  Secret,
  Hidden,
  Mystery,
  Surprise,
  Reveal,
  Discover,
  Explore,
  Adventure,
  Journey,
  Quest,
  Mission,
  Goal,
  Objective,
  Purpose,
  Vision,
  Dream,
  Hope,
  Wish,
  Desire,
  Want,
  Need,
  Require,
  Demand,
  Request,
  Ask,
  Question,
  Answer,
  Solution,
  Fix,
  Repair,
  Restore,
  Renew,
  Refresh,
  Update,
  Upgrade,
  Improve,
  Enhance,
  Boost,
  Increase,
  Grow,
  Expand,
  Scale,
  Multiply,
  Double,
  Triple,
  Quadruple,
  Maximize,
  Optimize,
  Complete,
  Finish,
  Done,
  Success,
  Win,
  Victory as VictoryIcon,
  Champion,
  Winner,
  First,
  Top,
  Best,
  Number1,
  Gold,
  Silver,
  Bronze,
  Diamond,
  Platinum,
  Crystal,
  Pearl,
  Ruby,
  Emerald,
  Sapphire,
  Amethyst,
  Topaz,
  Opal,
  Jade,
  Amber,
  Coral,
  Ivory,
  Marble,
  Granite,
  Stone,
  Rock,
  Mountain,
  Hill,
  Valley,
  River,
  Lake,
  Ocean,
  Sea,
  Beach,
  Island,
  Desert,
  Forest,
  Tree,
  Leaf,
  Flower,
  Rose,
  Tulip,
  Daisy,
  Sunflower,
  Lily,
  Orchid,
  Cherry,
  Apple,
  Orange,
  Lemon,
  Lime,
  Grape,
  Strawberry,
  Banana,
  Pineapple,
  Coconut,
  Peach,
  Pear,
  Plum,
  Kiwi,
  Mango,
  Papaya,
  Avocado,
  Tomato,
  Carrot,
  Potato,
  Onion,
  Garlic,
  Pepper,
  Chili,
  Cucumber,
  Lettuce,
  Spinach,
  Broccoli,
  Cauliflower,
  Cabbage,
  Corn,
  Peas,
  Beans,
  Rice,
  Wheat,
  Bread,
  Cake,
  Cookie,
  Candy,
  Chocolate,
  Ice,
  Snow,
  Fire,
  Water,
  Air,
  Earth,
  Space,
  Time,
  Energy,
  Power,
  Force,
  Strength,
  Speed,
  Fast,
  Quick,
  Rapid,
  Swift,
  Instant,
  Immediate,
  Now,
  Today,
  Tomorrow,
  Future,
  Past,
  Present,
  Moment,
  Second,
  Minute,
  Hour,
  Day,
  Week,
  Month,
  Year,
  Decade,
  Century,
  Millennium,
  Forever,
  Always,
  Never,
  Sometimes,
  Often,
  Rarely,
  Seldom,
  Usually,
  Normally,
  Typically,
  Generally,
  Commonly,
  Frequently,
  Regularly,
  Constantly,
  Continuously,
  Perpetually,
  Eternally,
  Infinitely,
  Endlessly,
  Limitlessly,
  Boundlessly,
  Vastly,
  Hugely,
  Enormously,
  Tremendously,
  Massively,
  Gigantically,
  Colossally,
  Monumentally,
  Astronomically,
  Incredibly,
  Unbelievably,
  Amazingly,
  Astonishingly,
  Surprisingly,
  Shockingly,
  Stunningly,
  Breathtakingly,
  Awe,
  Wonder,
  Marvel,
  Miracle,
  Magic as MagicIcon,
  Spell,
  Charm,
  Enchant,
  Bewitch,
  Captivate,
  Fascinate,
  Mesmerize,
  Hypnotize,
  Entrance,
  Allure,
  Attract,
  Draw,
  Pull,
  Magnetize,
  Gravitate,
  Orbit as OrbitIcon,
  Revolve,
  Rotate,
  Spin,
  Turn,
  Twist,
  Spiral,
  Swirl,
  Whirl,
  Vortex,
  Cyclone as CycloneIcon,
  Tornado as TornadoIcon,
  Hurricane as HurricaneIcon,
  Storm as StormIcon,
  Thunder as ThunderIcon,
  Lightning as LightningIcon,
  Bolt as BoltIcon2,
  Zap as ZapIcon3,
  Flash as FlashIcon2,
  Spark as SparkIcon,
  Fireworks as FireworksIcon,
  Confetti as ConfettiIcon,
  Party as PartyIcon,
  Celebration as CelebrationIcon,
  Cheers as CheersIcon,
  Clap as ClapIcon,
  ThumbsUp as ThumbsUpIcon,
  Heart as HeartIcon,
  HeartHandshake as HeartHandshakeIcon,
  Smile as SmileIcon,
  Laugh as LaughIcon,
  Grin as GrinIcon,
  Wink as WinkIcon,
  Kiss as KissIcon,
  Hug as HugIcon,
  Peace as PeaceIcon,
  Victory as VictoryIcon2,
  Ok as OkIcon,
  Good as GoodIcon,
  Great as GreatIcon,
  Excellent as ExcellentIcon,
  Perfect as PerfectIcon,
  Amazing as AmazingIcon,
  Awesome as AwesomeIcon,
  Fantastic as FantasticIcon,
  Wonderful as WonderfulIcon,
  Brilliant as BrilliantIcon,
  Outstanding as OutstandingIcon,
  Exceptional as ExceptionalIcon,
  Remarkable as RemarkableIcon,
  Incredible as IncredibleIcon,
  Unbelievable as UnbelievableIcon,
  Extraordinary as ExtraordinaryIcon,
  Phenomenal as PhenomenalIcon,
  Spectacular as SpectacularIcon,
  Magnificent as MagnificentIcon,
  Marvelous as MarvelousIcon,
  Superb as SuperbIcon,
  Supreme as SupremeIcon,
  Ultimate as UltimateIcon,
  Premium as PremiumIcon,
  Luxury as LuxuryIcon,
  Elite as EliteIcon,
  VIP as VIPIcon,
  Exclusive as ExclusiveIcon,
  Special as SpecialIcon,
  Unique as UniqueIcon,
  Rare as RareIcon,
  Limited as LimitedIcon,
  Custom as CustomIcon,
  Personal as PersonalIcon,
  Private as PrivateIcon,
  Confidential as ConfidentialIcon,
  Secret as SecretIcon,
  Hidden as HiddenIcon,
  Mystery as MysteryIcon,
  Surprise as SurpriseIcon,
  Reveal as RevealIcon,
  Discover as DiscoverIcon,
  Explore as ExploreIcon,
  Adventure as AdventureIcon,
  Journey as JourneyIcon,
  Quest as QuestIcon,
  Mission as MissionIcon,
  Goal as GoalIcon,
  Objective as ObjectiveIcon,
  Purpose as PurposeIcon,
  Vision as VisionIcon,
  Dream as DreamIcon,
  Hope as HopeIcon,
  Wish as WishIcon,
  Desire as DesireIcon,
  Want as WantIcon,
  Need as NeedIcon,
  Require as RequireIcon,
  Demand as DemandIcon,
  Request as RequestIcon,
  Ask as AskIcon,
  Question as QuestionIcon,
  Answer as AnswerIcon,
  Solution as SolutionIcon,
  Fix as FixIcon,
  Repair as RepairIcon,
  Restore as RestoreIcon,
  Renew as RenewIcon,
  Refresh as RefreshIcon,
  Update as UpdateIcon,
  Upgrade as UpgradeIcon,
  Improve as ImproveIcon,
  Enhance as EnhanceIcon,
  Boost as BoostIcon,
  Increase as IncreaseIcon,
  Grow as GrowIcon,
  Expand as ExpandIcon,
  Scale as ScaleIcon,
  Multiply as MultiplyIcon,
  Double as DoubleIcon,
  Triple as TripleIcon,
  Quadruple as QuadrupleIcon,
  Maximize as MaximizeIcon,
  Optimize as OptimizeIcon,
  Perfect as PerfectIcon2,
  Complete as CompleteIcon,
  Finish as FinishIcon,
  Done as DoneIcon,
  Success as SuccessIcon,
  Win as WinIcon,
  Victory as VictoryIcon3,
  Champion as ChampionIcon,
  Winner as WinnerIcon,
  First as FirstIcon,
  Top as TopIcon,
  Best as BestIcon,
  Number1 as Number1Icon,
  Gold as GoldIcon,
  Silver as SilverIcon,
  Bronze as BronzeIcon,
  Diamond as DiamondIcon,
  Platinum as PlatinumIcon,
  Crystal as CrystalIcon,
  Pearl as PearlIcon,
  Ruby as RubyIcon,
  Emerald as EmeraldIcon,
  Sapphire as SapphireIcon,
  Amethyst as AmethystIcon,
  Topaz as TopazIcon,
  Opal as OpalIcon,
  Jade as JadeIcon,
  Amber as AmberIcon,
  Coral as CoralIcon,
  Ivory as IvoryIcon,
  Marble as MarbleIcon,
  Granite as GraniteIcon,
  Stone as StoneIcon,
  Rock as RockIcon,
  Mountain as MountainIcon,
  Hill as HillIcon,
  Valley as ValleyIcon,
  River as RiverIcon,
  Lake as LakeIcon,
  Ocean as OceanIcon,
  Sea as SeaIcon,
  Beach as BeachIcon,
  Island as IslandIcon,
  Desert as DesertIcon,
  Forest as ForestIcon,
  Tree as TreeIcon,
  Leaf as LeafIcon,
  Flower as FlowerIcon,
  Rose as RoseIcon,
  Tulip as TulipIcon,
  Daisy as DaisyIcon,
  Sunflower as SunflowerIcon,
  Lily as LilyIcon,
  Orchid as OrchidIcon,
  Cherry as CherryIcon,
  Apple as AppleIcon,
  Orange as OrangeIcon,
  Lemon as LemonIcon,
  Lime as LimeIcon,
  Grape as GrapeIcon,
  Strawberry as StrawberryIcon,
  Banana as BananaIcon,
  Pineapple as PineappleIcon,
  Coconut as CoconutIcon,
  Peach as PeachIcon,
  Pear as PearIcon,
  Plum as PlumIcon,
  Kiwi as KiwiIcon,
  Mango as MangoIcon,
  Papaya as PapayaIcon,
  Avocado as AvocadoIcon,
  Tomato as TomatoIcon,
  Carrot as CarrotIcon,
  Potato as PotatoIcon,
  Onion as OnionIcon,
  Garlic as GarlicIcon,
  Pepper as PepperIcon,
  Chili as ChiliIcon,
  Cucumber as CucumberIcon,
  Lettuce as LettuceIcon,
  Spinach as SpinachIcon,
  Broccoli as BroccoliIcon,
  Cauliflower as CauliflowerIcon,
  Cabbage as CabbageIcon,
  Corn as CornIcon,
  Peas as PeasIcon,
  Beans as BeansIcon,
  Rice as RiceIcon,
  Wheat as WheatIcon,
  Bread as BreadIcon,
  Cake as CakeIcon,
  Cookie as CookieIcon,
  Candy as CandyIcon,
  Chocolate as ChocolateIcon,
  Ice as IceIcon,
  Snow as SnowIcon,
  Fire as FireIcon,
  Water as WaterIcon,
  Air as AirIcon,
  Earth as EarthIcon,
  Space as SpaceIcon,
  Time as TimeIcon,
  Energy as EnergyIcon,
  Power as PowerIcon,
  Force as ForceIcon,
  Strength as StrengthIcon,
  Speed as SpeedIcon,
  Fast as FastIcon,
  Quick as QuickIcon,
  Rapid as RapidIcon,
  Swift as SwiftIcon,
  Instant as InstantIcon,
  Immediate as ImmediateIcon,
  Now as NowIcon,
  Today as TodayIcon,
  Tomorrow as TomorrowIcon,
  Future as FutureIcon,
  Past as PastIcon,
  Present as PresentIcon,
  Moment as MomentIcon,
  Second as SecondIcon,
  Minute as MinuteIcon,
  Hour as HourIcon,
  Day as DayIcon,
  Week as WeekIcon,
  Month as MonthIcon,
  Year as YearIcon,
  Decade as DecadeIcon,
  Century as CenturyIcon,
  Millennium as MillenniumIcon,
  Forever as ForeverIcon,
  Always as AlwaysIcon,
  Never as NeverIcon,
  Sometimes as SometimesIcon,
  Often as OftenIcon,
  Rarely as RarelyIcon,
  Seldom as SeldomIcon,
  Usually as UsuallyIcon,
  Normally as NormallyIcon,
  Typically as TypicallyIcon,
  Generally as GenerallyIcon,
  Commonly as CommonlyIcon,
  Frequently as FrequentlyIcon,
  Regularly as RegularlyIcon,
  Constantly as ConstantlyIcon,
  Continuously as ContinuouslyIcon,
  Perpetually as PerpetuallyIcon,
  Eternally as EternallyIcon,
  Infinitely as InfinitelyIcon,
  Endlessly as EndlesslyIcon,
  Limitlessly as LimitlesslyIcon,
  Boundlessly as BoundlesslyIcon,
  Vastly as VastlyIcon,
  Hugely as HugelyIcon,
  Enormously as EnormouslyIcon,
  Tremendously as TremendouslyIcon,
  Massively as MassivelyIcon,
  Gigantically as GiganticallyIcon,
  Colossally as ColossallyIcon,
  Monumentally as MonumentallyIcon,
  Astronomically as AstronomicallyIcon,
  Incredibly as IncrediblyIcon,
  Unbelievably as UnbelievablyIcon,
  Amazingly as AmazinglyIcon,
  Astonishingly as AstonishinglyIcon,
  Surprisingly as SurprisinglyIcon,
  Shockingly as ShockinglyIcon,
  Stunningly as StunninglyIcon,
  Breathtakingly as BreathtakinglyIcon,
  Awe as AweIcon,
  Wonder as WonderIcon,
  Marvel as MarvelIcon,
} from 'lucide-react';

const FinancialServices: React.FC = () => {
  const { t } = useLanguage();

  const serviceOfferings = [
    {
      icon: Telescope,
      title: t('financial.services.eligibilityTests.title'),
      description: t('financial.services.eligibilityTests.description'),
      features: [
        t('financial.services.eligibilityTests.feature1'),
        t('financial.services.eligibilityTests.feature2'),
        t('financial.services.eligibilityTests.feature3'),
        t('financial.services.eligibilityTests.feature4')
      ]
    },
    {
      icon: Compass,
      title: t('financial.services.strategicRoadmap.title'),
      description: t('financial.services.strategicRoadmap.description'),
      features: [
        t('financial.services.strategicRoadmap.feature1'),
        t('financial.services.strategicRoadmap.feature2'),
        t('financial.services.strategicRoadmap.feature3'),
        t('financial.services.strategicRoadmap.feature4')
      ]
    },
    {
      icon: Crown,
      title: t('financial.services.endToEndManagement.title'),
      description: t('financial.services.endToEndManagement.description'),
      features: [
        t('financial.services.endToEndManagement.feature1'),
        t('financial.services.endToEndManagement.feature2'),
        t('financial.services.endToEndManagement.feature3'),
        t('financial.services.endToEndManagement.feature4')
      ]
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: t('financial.process.step1.title'),
      description: t('financial.process.step1.description'),
      duration: t('financial.process.step1.duration'),
      icon: Microscope
    },
    {
      number: '02',
      title: t('financial.process.step2.title'),
      description: t('financial.process.step2.description'),
      duration: t('financial.process.step2.duration'),
      icon: Route
    },
    {
      number: '03',
      title: t('financial.process.step3.title'),
      description: t('financial.process.step3.description'),
      duration: t('financial.process.step3.duration'),
      icon: Rocket
    },
    {
      number: '04',
      title: t('financial.process.step4.title'),
      description: t('financial.process.step4.description'),
      duration: t('financial.process.step4.duration'),
      icon: Trophy
    },
  ];

  const fundingTypes = [
    {
      icon: Gift,
      title: t('financial.fundingTypes.subsidies.title'),
      description: t('financial.fundingTypes.subsidies.description'),
      benefits: [
        t('financial.fundingTypes.subsidies.benefit1'),
        t('financial.fundingTypes.subsidies.benefit2'),
        t('financial.fundingTypes.subsidies.benefit3')
      ]
    },
    {
      icon: Gem,
      title: t('financial.fundingTypes.governmentLoans.title'),
      description: t('financial.fundingTypes.governmentLoans.description'),
      benefits: [
        t('financial.fundingTypes.governmentLoans.benefit1'),
        t('financial.fundingTypes.governmentLoans.benefit2'),
        t('financial.fundingTypes.governmentLoans.benefit3')
      ]
    },
    {
      icon: Sparkles,
      title: t('financial.fundingTypes.grants.title'),
      description: t('financial.fundingTypes.grants.description'),
      benefits: [
        t('financial.fundingTypes.grants.benefit1'),
        t('financial.fundingTypes.grants.benefit2'),
        t('financial.fundingTypes.grants.benefit3')
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Medal,
      title: t('financial.whyChoose.expertise.title'),
      description: t('financial.whyChoose.expertise.description')
    },
    {
      icon: ShieldCheck,
      title: t('financial.whyChoose.compliance.title'),
      description: t('financial.whyChoose.compliance.description')
    },
    {
      icon: HeartHandshake,
      title: t('financial.whyChoose.support.title'),
      description: t('financial.whyChoose.support.description')
    },
    {
      icon: Star,
      title: t('financial.whyChoose.success.title'),
      description: t('financial.whyChoose.success.description')
    }
  ];

  const metrics = [
    { value: '95%', label: t('financial.results.successRate'), description: t('financial.results.successDescription') },
    { value: '€85K+', label: t('financial.results.totalFunding'), description: t('financial.results.fundingDescription') },
    { value: '25+', label: t('financial.results.clientsHelped'), description: t('financial.results.clientsDescription') },
    { value: '30', label: t('financial.results.avgDays'), description: t('financial.results.daysDescription') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-lime-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="flex items-center space-x-3 mb-6">
                <CircleDollarSign className="w-8 h-8 text-neon-blue-500" />
                <span className="text-neon-blue-400 font-inter font-medium">{t('services.financialServices')}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-space-grotesk">
                {t('financial.hero.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.hero.titleHighlight')}</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 font-inter leading-relaxed">
                {t('financial.hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <Telescope className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t('financial.hero.cta')}</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-neon-blue-500/10 hover:border-gradient-lime-500 hover:text-gradient-lime-400 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Calculator className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">{t('financial.hero.freeTest')}</span>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-navy-800/50 backdrop-blur-sm border border-neon-blue-500/20 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <CircleDollarSign className="w-12 h-12 text-neon-blue-500 mx-auto" />
                        <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md mx-auto"></div>
                      </div>
                      <div className="text-2xl font-bold text-white font-space-grotesk">€85K+</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.fundingSecured')}</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <Trophy className="w-12 h-12 text-gradient-lime-500 mx-auto" />
                        <div className="absolute inset-0 w-12 h-12 bg-gradient-lime-500/20 rounded-full blur-md mx-auto"></div>
                      </div>
                      <div className="text-2xl font-bold text-white font-space-grotesk">95%</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.successRate')}</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <Crown className="w-12 h-12 text-neon-blue-500 mx-auto" />
                        <div className="absolute inset-0 w-12 h-12 bg-neon-blue-500/20 rounded-full blur-md mx-auto"></div>
                      </div>
                      <div className="text-2xl font-bold text-white font-space-grotesk">25+</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.clientsHelped')}</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className="relative mb-3">
                        <Rocket className="w-12 h-12 text-gradient-lime-500 mx-auto" />
                        <div className="absolute inset-0 w-12 h-12 bg-gradient-lime-500/20 rounded-full blur-md mx-auto"></div>
                      </div>
                      <div className="text-2xl font-bold text-white font-space-grotesk">30</div>
                      <div className="text-sm text-gray-400 font-inter">{t('financial.hero.avgDays')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.offerings.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.offerings.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.offerings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <div key={index} className="group bg-navy-900/50 border border-neon-blue-500/20 rounded-2xl p-8 hover:border-neon-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue-500/10 hover:transform hover:scale-105">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-navy-900" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white font-space-grotesk group-hover:text-neon-blue-400 transition-colors text-center mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 font-inter text-center">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-gradient-lime-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.process.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.process.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue-500 to-transparent z-0"></div>
                )}
                
                <div className="relative bg-navy-800/50 border border-neon-blue-500/20 rounded-2xl p-6 text-center hover:border-neon-blue-500/40 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-navy-900" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full blur-md opacity-50 mx-auto group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-lime-500 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-navy-900 font-space-grotesk">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 font-space-grotesk group-hover:text-neon-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 font-inter">
                    {step.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-sm text-neon-blue-400">
                    <Clock className="w-4 h-4" />
                    <span className="font-inter">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Types Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.fundingTypes.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.fundingTypes.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.fundingTypes.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fundingTypes.map((type, index) => (
              <div key={index} className="group bg-navy-900/50 border border-neon-blue-500/20 rounded-2xl p-8 hover:border-neon-blue-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-3xl flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <type.icon className="w-10 h-10 text-navy-900" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-3xl blur-lg opacity-50 mx-auto group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white font-space-grotesk group-hover:text-neon-blue-400 transition-colors">{type.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 font-inter text-center">
                  {type.description}
                </p>
                
                <ul className="space-y-3">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-gradient-lime-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 font-inter">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.whyChoose.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.whyChoose.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <reason.icon className="w-12 h-12 text-navy-900" />
                  </div>
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 rounded-full blur-xl opacity-50 mx-auto group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 font-space-grotesk group-hover:text-neon-blue-400 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-300 font-inter">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.results.title')} <span className="bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent">{t('financial.results.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {t('financial.results.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-navy-900/50 border border-neon-blue-500/20 rounded-2xl p-8 hover:border-neon-blue-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neon-blue-500/10 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl font-bold bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 bg-clip-text text-transparent mb-2 font-space-grotesk">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2 font-space-grotesk">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-400 font-inter">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-blue-500/10 to-gradient-lime-500/10 border-t border-neon-blue-500/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-slide-in-up">
            <img 
              src="/Techwave Office Logo Symbol.png" 
              alt="TechWave Office Logo" 
              className="w-16 h-16 object-contain mx-auto mb-6"
            />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-space-grotesk">
              {t('financial.cta.title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-inter">
              {t('financial.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-neon-blue-500 to-gradient-lime-500 text-navy-900 px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-neon-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
              >
                <Telescope className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">{t('financial.cta.freeTest')}</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-neon-blue-500 text-neon-blue-500 px-8 py-4 rounded-xl font-inter font-semibold text-lg hover:bg-neon-blue-500/10 hover:border-gradient-lime-500 hover:text-gradient-lime-400 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <HeartHandshake className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">{t('financial.cta.consultation')}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;