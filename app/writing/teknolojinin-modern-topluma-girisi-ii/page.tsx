import Link from "next/link";

const paragraphsTR = [
  `Yapay zekanın toplumsal düzene kademeli entegrasyonu, yalnızca teknik bir gelişme değil, aynı zamanda kolektif hikayelerimizin nasıl anlatıldığı, aktarıldığı ve anlam kazandığı süreçlerini dönüştüren bir kırılma noktası olabilme potansiyeli taşır. Toplumsal düzeni ayakta tutan ortak inançlar, büyük ölçüde bilginin nasıl üretildiği, dolaşıma sokulduğu ve yorumlandığı ile ilişkilidir. Bu nedenle yapay zekanın oluşturduğu en büyük toplumsal tehdit, sadece bilgi üretme kapasitesinde değil; zamanla bilgiye ulaşımın regülasyonunu sağlama, bilgiyi filtreleme, sıralama ve görünür kılma gücünü elinde toplama ihtimalinden ortaya çıkar. Böyle bir durumda yapay zeka; toplumsal gerçekliği tarafsız biçimde aktaran bir araç olmaktan çıkarak, hangi bilginin geçerli, güvenilir ve doğru kabul edileceğini dolaylı biçimde belirleyen bir otoriteye dönüşebilme riski taşır.`,
  `Evreni algılamak ve bu algıyı yorumlamak, her bireyin bilişsel seviyesi ve kültürel arka planına göre farklılık gösterirken; yapay zekanın kendisine sunulan veriyi işleme biçimi ve bilişsel kapasitesi, olguları yorumlama sürecini kaçınılmaz olarak subjektif şekilde etkiler. En gelişmiş yapay zeka modelleriyle geliştirilen agentlar, temel olarak bu merkezi düşünce yapısını benimsediği için, kullanımları toplumsal düzeyde tek tip ve merkezi bir düşünce kalıbının yaygınlaşmasına yol açabilir. Merkezi bir düşünce yapısına sahip toplum, o yapıyı kontrol eden otoritenin etkisine maruz kalır. Modeli kimin hangi verilerle eğittiği, hangi değer yargılarıyla karar alma sistemlerinin oluşturulduğu bireysel değil, toplumsal ölçekte belirleyici olur.`,
  `Biyolojik çeşitlilik bir ekosistemin hayatta kalmasını sağlar. Bilişsel çeşitlilik de aynı işlevi görür. Tek tip düşünen bir toplum, öngörülemeyen sorunlar karşısında adaptasyon kapasitesini yitirir. Özellikle yapay zekanın farklı bireysel bakış açılarını tek bir ortak bilişsel çerçeve içinde topladığı bir "Birleşik Bilinç" yapısına yaklaşması, insan deneyiminden doğan çok sesliliği zayıflatma ve yerini daha merkezi, yönlendirilebilir bir düşünce yapısına bırakma tehlikesi taşır. Bu durumda, çeşitlilikten doğan çok sesli insan deneyimi zayıflayarak yerini daha merkezi, tek tip ve kolayca yönlendirilebilen bir düşünce yapısına bırakabilir.`,
  `Dil modellerinin birbirini etkilemesi ve çıktılarıyla birbirlerini beslemesi, modellerin kolektif bir bilinç benzeri etkileşimler geliştirmesine neden olurken; aynı zamanda, eğitim sürecinde kullanılan normların zamanla daha uç ve radikal bir hale gelme riskini de artırır. Böylece, agentların ve dil modellerinin topluma entegrasyonu, hem farklı bakış açılarını zayıflatır hem de merkezi doğru anlayışını güçlendirir. Dil modellerinin birbirinin çıktısıyla eğitilmesi durumunda ise bu süreç daha da derinleşir. Her eğitim döngüsünde küçük sapmalar ve eğilimler güçlenerek artar; ufak sapmalar bambaşka sonuçlara neden olabilir bu da bir yankı etkisi yaratarak sapmaların büyümesine neden olur. Sonuç olarak modellerin eğitiminde kullanılan normlar, dışarıdan bir düzeltici müdahale olmaksızın giderek radikalleşme potansiyeli taşır. "Model collapse (model çökmesi)" olarak da tartışılan, yapay zekanın kendi ürettiği veriyle bozulmaya uğraması riskine dönüşmüş olur.`,
  `Agentic sistemler dil modellerinin uzantısı olarak var olabildiğinden merkezi bir bilgiye ulaşım söz konusu olur. Toplumsal olarak dayatılan tek bir doğru anlayışı, bireyin kendi hakikatini arama imkanını sınırladığı gibi, toplumun düşünsel gelişimini de zayıflatır. Çünkü bir olgunun derinlikli biçimde anlaşılabilmesi, ancak farklı görüşlerin, zıt fikirlerin ve çeşitli yaklaşımların bir arada var olmasıyla mümkündür. Aynı olgunun farklı bakış açılarıyla değerlendirilmesi, o olguya yeni perspektifler kazandırır ve onun daha geniş bir çerçevede ele alınabilmesini sağlar. Bu nedenle fikir ayrılıkları, toplumsal zayıflık değil; tam tersine bilişsel gelişimi hızlandıran temel unsurlardan biridir. Fikir çeşitliliği, olguları sorgulayabilmek için gerekli alanı oluşturur; hiçbir olgu tek ve değişmez bir mutlak gerçeklik olarak var olmaz. Yaklaşım değiştikçe olgunun anlamı da değişir ve onun sabit bir doğruluk taşımadığı ortaya çıkar. Nietzsche'nin perspektivizm felsefesinin temelini oluşturan Olgu diye bir şey yoktur, yalnızca olguların yorumları vardır anlayışı hiçbir bakış açısının mutlak, nesnel bir gerçeğe ulaşamayacağı, her "gerçeğin" aslında belirli bir perspektiften yapılmış bir yorum olduğu düşüncesini benimser. Bu bağlamda yapay zekanın bilgiyi kolay ulaşılabilir hale getirirken aynı zamanda dili kullanarak bilgiyi biçimlendirmesi, objektif ve değişmez bir gerçekliğin var olduğu yanılsamasını toplum arasında güçlendirebilir.`,
  `Bunun yanı sıra daha derin ve fark edilmesi güç bir problem olarak modellerin şekillenmesinde rol oynayan faktörler, sorunu derinleştirir. Sinir ağlarının katmanlarında verilere atanan ağırlıklar ve yönlendirmeler, yani weight ve bias'lar, büyük ölçüde black box olarak tanımlanan süreçler aracılığıyla belirlenir. Hangi örüntünün neden güçlendiği, hangi çerçevenin neden baskın çıktığı çoğunlukla denetlenemez ve açıklanamaz. Bu görünmez eğilimler birbirinden bağımsız izole birer hata olmaktansa, her katmanda birikerek büyüyen yapısal sapmalar haline gelebilir. Kartopu efekti gibi, başlangıçta fark edilmeyecek kadar küçük olan bir yönelim, katman katman güçlenerek modelin gerçekliği yorumlama biçimini sessizce belirler. Bu nedenle belirleyici olan modelin kullanım şeklindense, hangi çerçeveyi kullanarak veri analizi ve aktarımını yaptığı olur. Kullanım biçimlerinden çok daha derin ve etkili biçimde, modelin analiz etme kapasitesini içeriden şekillendirir. Bir modelin etki alanı büyüdükçe bu şekillendirme de toplumsal ölçeğe taşınır; model çıktılarıyla doğru ve yanlış kavramlarını tanımlama gücünü devralmış olur. Sorun tek bir modelin olgulara karşı kullandığı ve oluşturduğu subjektif çerçeve yani; ne düşündüğü değil, o modelin tüm ekosistemi şekillendirmesi ve bu şekillendirmenin zamanla kendi kendini pekiştirmesindedir.`,
  `Modelin etki alanı büyüdükçe etkisinin boyutu farkına varılmaksızın toplumsal hayata entegre olacağından doğru yanlış kavramlarını şekillendirme gücünü teslim alır. Teknoloji bilgiye ulaşımı kolaylaştırırken, aynı zamanda bilgiyi tarafsız biçimde sunmayan; onu seçen, biçimlendiren ve yorumlanışını etkileyen bir rol de üstlendiğinden, "gerçek" olarak benimsenen doğruların sorgulanması zorlaşabilir. Agentic sistemlerin ve birbirini etkileyen dil modellerinin bu merkezi yapıyı daha da güçlendirme potansiyeli düşünüldüğünde, fikir çeşitliliğinin azalması ve küresel ölçekte tek bir doğru anlayışının oluşması riski daha görünür hale gelir, doğruların değişken yapısı göz ardı edilebilir. Dil modellerinin sunduğu çerçeveden filtrelenen "doğru" veya "gerçeklik" filtrelenirken oluşturulabilir veya şekillendirilebilir olur. Merkezi "doğru" veya "gerçek" algısı yaratıldığından, toplumun çeşitliliğinden ve farklılıklarından doğan değerlerin zamanla risk altına girmesine yol açar.`,
  `Yapay zekanın bilgiye ulaşılabilirliği arttırması aynı zamanda dili kullanarak bilgiyi biçimlendirmesi, objektif ve değişmez bir gerçekliğin var olduğu yanılsamasını güçlendirir. Yapay zeka modellerinin felsefi olarak belirsiz gelişimi riski derinleştirir. Modellerin gelişimi her ne kadar insan verisine dayalı bir sistem olsa da, veriden yapılan çıkarımın işlenişi, sistemin kendi doğası gereği taşıdığı sübjektiviteye bağlı olur. Bu noktada hem bilgiye ulaşım sürecinin hem de bilginin yorumlanma biçiminin aynı araç tarafından belirlenmesi, bireyin kendisine sunulan çıktıyı sorgulamasını zorlaştırır. Bilgiye ulaşımı sağlayan aracın aynı zamanda bu ulaşım üzerinde hakimiyet kurması, bizlere verilen bilgiyi araştırmamızı, olguları sorgulamamızı ve olaylara bize sunulanın dışında bir bakış açısıyla yaklaşabilme becerimizi zayıflatır. Hayata karşı daha "objektif" bir bakış açısında olduğumuz yanılgısına düşürerek evrenin işleyişindeki sübjektiviteyi göz ardı etmemize neden olur.`,
];

const paragraphsEN = [
  `The gradual integration of artificial intelligence into the social order carries the potential to be not merely a technical development, but a breaking point that transforms the processes through which our collective narratives are told, transmitted, and given meaning. The shared beliefs that sustain social order are largely tied to how knowledge is produced, circulated, and interpreted. For this reason, the greatest social threat posed by artificial intelligence emerges not only from its capacity to produce knowledge, but from the possibility that it may come to consolidate the power to regulate access to knowledge, to filter, rank, and render information visible. In such a scenario, artificial intelligence risks moving beyond being a tool that conveys social reality neutrally, and transforming into an authority that indirectly determines which knowledge is considered valid, reliable, and true.`,
  `While perceiving the world and interpreting that perception varies according to each individual's cognitive level and cultural background, the way artificial intelligence processes the data presented to it, and its cognitive capacity, inevitably influences the interpretation of facts in a subjective manner. Since agents developed with the most advanced AI models fundamentally adopt this central cognitive structure, their use may lead to the widespread adoption of a uniform and centralized pattern of thinking at the societal level. A society with a centralized cognitive structure becomes exposed to the influence of the authority that controls that structure. Who trains the model, with what data, and according to what value judgments, these decisions become determinative not at the individual level, but at the societal scale.`,
  `Biological diversity sustains the survival of an ecosystem. Cognitive diversity serves the same function. A society that thinks in a uniform way loses its capacity to adapt in the face of unforeseen problems. In particular, the possibility of artificial intelligence approaching a "United Consciousness" structure, one that gathers different individual perspectives into a single shared cognitive framework, carries the danger of weakening the plurality born from human experience and replacing it with a more centralized and directable mode of thought. In such a case, the multi-voiced human experience born from diversity may weaken and give way to a more centralized, uniform, and easily manipulated cognitive structure.`,
  `The mutual influence of language models and their feeding on each other's outputs causes models to develop collective consciousness-like interactions, while also increasing the risk that the norms used in training processes may gradually become more extreme and radical over time. Thus, the integration of agents and language models into society both weakens diverse perspectives and strengthens a centralized understanding of truth. When language models are trained on each other's outputs, this process deepens further. In each training cycle, small deviations and tendencies grow stronger; minor deviations can lead to entirely different outcomes, creating an echo effect that causes these deviations to expand. As a result, the norms used in model training carry the potential to become increasingly radicalized without corrective intervention from outside, a risk that transforms into what is discussed in the literature as "model collapse": the degradation of artificial intelligence through the data it itself produces.`,
  `Since agentic systems can exist as extensions of language models, access to a centralized body of knowledge becomes a given. A single understanding of truth imposed upon society not only limits the individual's ability to seek their own reality, but also weakens the intellectual development of society as a whole. For a phenomenon to be understood in depth, it is only possible when different views, opposing ideas, and diverse approaches coexist. Evaluating the same phenomenon from different perspectives brings new dimensions to it and enables it to be addressed within a broader framework. For this reason, differences of opinion are not a social weakness, they are, on the contrary, one of the fundamental elements that accelerate cognitive development. Diversity of thought creates the space necessary for questioning phenomena; no phenomenon exists as a single and unchanging absolute truth. As the approach changes, so does the meaning of the phenomenon, and it becomes clear that it carries no fixed truth. Nietzsche's perspectivism, the foundational understanding that there are no facts, only interpretations of facts, holds that no perspective can reach an absolute, objective truth, and that every "truth" is in fact an interpretation made from a particular perspective. In this context, while artificial intelligence makes knowledge more accessible, its simultaneous shaping of knowledge through language may strengthen the illusion among society that an objective and unchanging reality exists.`,
  `Beyond this, the factors that play a role in shaping models, as a deeper and more difficult to detect problem, further compound the issue. The weights and orientations assigned to data in the layers of neural networks, that is, the weights and biases, are largely determined through processes defined as black box models. Which pattern is strengthened and why, which framework becomes dominant and why, these questions are most often impossible to audit or explain. These invisible tendencies, rather than being isolated and independent errors, can become structural deviations that accumulate and grow at every layer. Like a snowball effect, a tendency that is too small to notice at the outset grows stronger layer by layer, silently determining the way the model interprets reality. For this reason, what is determinative is not how the model is used, but which framework it employs when analyzing and transmitting data. Far more deeply and effectively than the mode of use, it shapes the model's capacity for analysis from within. As a model's domain of influence grows, this shaping is carried to the societal scale; through its outputs, the model assumes the power to define the concepts of right and wrong. The problem lies not in the subjective framework a single model constructs toward phenomena, not in what it thinks, but in the fact that the model shapes the entire ecosystem, and that this shaping reinforces itself over time.`,
  `As the model's domain of influence grows, its impact integrates into social life without being noticed, and it assumes the power to shape the concepts of right and wrong. While technology facilitates access to knowledge, it simultaneously takes on a role that does not present knowledge neutrally, one that selects, shapes, and influences how knowledge is interpreted, making it increasingly difficult to question the truths adopted as "real." When one considers the potential of agentic systems and mutually influencing language models to further reinforce this centralized structure, the risk of a decline in diversity of thought and the formation of a single global understanding of truth becomes more visible, and the variable nature of truths may be overlooked. The "truth" or "reality" filtered through the framework offered by language models becomes something that can be constructed or shaped in the process of filtering. Since a centralized perception of "truth" or "reality" is created, it leads over time to the values born from society's diversity and differences coming under risk.`,
  `The fact that artificial intelligence increases the accessibility of knowledge while simultaneously shaping it through language strengthens the illusion that an objective and unchanging reality exists. The philosophically ambiguous development of AI models deepens this risk. Although the development of models is a system based on human data, the processing of inferences drawn from that data depends on the subjectivity inherent in the system's own nature. At this point, the fact that both the process of accessing knowledge and the way knowledge is interpreted are determined by the same instrument makes it harder for the individual to question the output presented to them. The fact that the tool providing access to knowledge simultaneously establishes dominance over that access weakens our capacity to research the information given to us, to question phenomena, and to approach events from a perspective beyond what is presented to us. It causes us to fall into the illusion that we hold a more "objective" view of life, leading us to overlook the subjectivity inherent in the workings of the universe.`,
];

const notes = [
  {
    term: "Model Collapse",
    termTR: "Model Çökmesi",
    bodyTR: `Bir dil modeli internetten, kitaplardan, insan yazısından beslenerek eğitilir. Ancak yapay zeka modelleri yaygınlaştıkça internete akan içeriğin giderek artan bir kısmı yapay zeka tarafından üretilmiş olmaya başlar. Zamanla sonraki nesil modeller bu yapay zeka üretimi içeriği de eğitim verisi olarak alırsa ne olur? 1. Nesilde model insan yazısıyla eğitilerek zenginleşir; çeşitli, hatalı ama özgün datalar üzerinden bilincini geliştirir. 2. Nesilde model kısmen kendi neslinin çıktılarıyla eğitilir. Nadir örüntüler, uç fikirler, alışılmadık bakış açıları yavaş yavaş kaybolmaya başlar. Model "ortalamaya" yaklaşır. 3. Nesil ve sonrasında çeşitlilik daha da daralır. Model giderek daha steril, daha öngörülebilir, daha tek tip çıktılar üretir. Teknik olarak modelin öğrendiği olasılık dağılımı bozularak istatistiksel olarak nadir olan, ama değerli olan, bilgi ve bakış açıları eğitim verisinden silinir. Kendi doğrularını sorgulayamayan toplum yavaşça ona verileni kabul edecek şekilde evrilir. Merkezi biçimde dil aracılığıyla kontrol edilebilen bir sosyolojik yapı oluşmuş olur.`,
    bodyEN: `A language model is trained by being fed from the internet, books, and human writing. However, as AI models become more widespread, a growing portion of the content flowing into the internet begins to be produced by artificial intelligence. In the first generation, the model is enriched through human writing, it develops its understanding through diverse, imperfect, but original data. In the second generation, the model is trained partly on the outputs of its own generation. Rare patterns, extreme ideas, and unconventional perspectives begin to disappear. The model approaches the "average." In the third generation and beyond, diversity narrows further. Technically, the probability distribution the model has learned becomes corrupted, and statistically rare, but valuable, knowledge and perspectives are erased from the training data. A society that cannot question its own truths gradually evolves into one that accepts what is given to it.`,
  },
  {
    term: "Weight & Bias",
    termTR: "Weight ve Bias",
    bodyTR: `Bir sinir ağı milyarlarca parametreden oluşur; eğitim sürecinde her parametre ayarlanır, hangisinin ne kadar önemli olduğu belirlenir. Weight bir bağlantının gücüdür. Hangi örüntünün ne kadar ağırlık taşıdığını belirler; yüksek weight'e sahip bir bağlantı modelin o örüntüye daha fazla önem vermesi demektir. Bias modelin bir örüntüye başlangıçta ne kadar yatkın olduğudur, veriyi görmeden önce bile modelin belirli bir yöne eğilimi olması demektir. Nöral ağlarda veri inputlarına verilen bu ağırlık ve önyargılar modelin dünyayı nasıl gördüğünü belirler. Neyin önemli, neyin önemsiz olduğuna dair tüm hiyerarşi bu parametrelerden doğar.`,
    bodyEN: `A neural network consists of billions of parameters; during training, each parameter is adjusted and it is determined how important each one is. Weight is the strength of a connection, it determines how much importance a given pattern carries. Bias is how inclined the model is toward a particular pattern from the outset, even before seeing the data, the model already has a tendency in a particular direction. These weights and biases assigned to data inputs in neural networks determine how the model sees the world. The entire hierarchy of what is important and what is unimportant emerges from these parameters.`,
  },
  {
    term: "United Consciousness",
    termTR: "Birleşik Bilinç",
    bodyTR: `Bugün dünya genelinde milyarlarca insan, düşüncelerini, sorularını ve kararlarını birkaç büyük dil modeliyle şekillendiriyor. Bu modeller farklı dillerde, farklı kültürlerde kullanılsa da özünde aynı eğitim verisinden, aynı mimari kararlardan, aynı değer hiyerarşilerinden besleniyor. Bu durum teknik anlamda bir bilinç birliği anlamına gelmese de işlevsel olarak benzer bir sonuç doğurur. Bireyler farklı sorular sorar ama hepsi aynı sistemin süzgecinden geçer. Epistemik anlamda birleşik bir çerçeve yaratır. Düşünce, dille kurulur. Belirli bir modelin dil kalıplarını ve kavram çerçevelerini benimsemek, o modelin dünyayı görme biçimini de benimsemek demek olur. Modelin neyin önemli, neyin güvenilir, neyin marjinal olduğuna dair içsel bir hiyerarşisi bulunur; kullanıcılar bu hiyerarşiyi görünmez biçimde içselleştirir.`,
    bodyEN: `Today, billions of people around the world are shaping their thoughts, questions, and decisions through a handful of large language models. Even though these models are used in different languages and cultures, they are all fed from the same training data, the same architectural decisions, and the same value hierarchies at their core. Although this does not constitute a unity of consciousness in a technical sense, it produces a functionally similar outcome. Individuals ask different questions, but all pass through the filter of the same system, creating an epistemically unified framework. Thought is constructed through language. Adopting a model's language patterns and conceptual frameworks means adopting that model's way of seeing the world. The model carries an internal hierarchy regarding what is important, reliable, and marginal; users invisibly internalize this hierarchy.`,
  },
  {
    term: "Black Box Model",
    termTR: "Kapalı Kutu Model",
    bodyTR: `Bir modelin milyarlarca parametresi vardır. Bu parametrelerin her birinin neden o değeri aldığını, hangi eğitim verisinin hangi weight'i nasıl şekillendirdiğini tam olarak açıklamak mümkün değildir. Model çalışıp doğru sonuçlar üretse de neden o sonucu ürettiğini adım adım takip edemezsiniz. Bu yüzden "black box" denir, kapalı kutu. İçine bakabilirsiniz, parametreleri görebilirsiniz; ama bu parametrelerin oluşturduğu anlamı ve yarattığı hiyerarşiyi okuyamazsınız. Önyargıları somut biçimde görünmez kılar. Model belirli bir fikri, kültürü ya da değer sistemini kayırıyor olabilir, bunu ancak çıktılardan tahmin edebilirsiniz, içeriden okuyamazsınız. Yapay zekanın en büyük ve görünmez tehlikesi bu şekilde, ideolojik anlamda, var olur.`,
    bodyEN: `A model has billions of parameters. It is not possible to fully explain why each took the value it did, or how a given piece of training data shaped a particular weight. Even when a model operates and produces correct results, you cannot trace step by step why it produced that result. This is why it is called a "black box." You can look inside, you can see the parameters, but you cannot read the meaning they create or the hierarchy they produce. The model may be favoring a particular idea, culture, or value system; you can only infer this from the outputs, you cannot read it from the inside. The greatest and most invisible threat of artificial intelligence exists precisely in this form, ideologically.`,
  },
  {
    term: "Agent & Agentic Systems",
    termTR: "Agent ve Agentic Sistem",
    bodyTR: `Agentlar dil modellerinden oluşturulan, spesifik bir amaca hizmet etmek için tasarlanmış küçük işlemcilerdir. Tüm bu agentlar bir temel modelin üzerine inşa edilir. O temel modelin epistemik çerçevesi, weight ve bias'ları, yani görünmez hiyerarşisi, tüm agent ekosistemi tarafından miras alınır. Agent bir hedefe ulaşmak için kendi parametrelerine göre kararlarını verir, adımlarını kendisi planlayan ve uygulayan bir sistemdir. Her agent'ın merkezinde GPT, Claude, Gemini gibi bir dil modeli bulunur. Yüzlerce farklı amaç için tasarlanmış yüzlerce farklı agent, özünde aynı bilişsel filtreden geçer. Çeşitlilik yanılsaması yaratılır; ama altta yatan çerçeve tektir. Bu çerçeve ne kadar görünmezse, agent'ların yarattığı etki de o kadar fark edilmez biçimde toplumsal yapıya işler.`,
    bodyEN: `Agents are small processors built from language models, created to serve a specific purpose. All agents are built on top of a foundational model, inheriting its epistemological framework, weights and biases, its invisible hierarchy. An agent makes its decisions according to its own parameters in order to reach a goal; it plans and executes its own steps. At the center of every agent lies a language model such as GPT, Claude, or Gemini. Hundreds of different agents designed for hundreds of different purposes all pass through the same cognitive filter at their core. An illusion of diversity is created, but the underlying framework is singular. The more invisible that framework is, the more imperceptibly the effect created by the agents works its way into the social structure.`,
  },
];

export default function ArticlePart2Page() {
  return (
    <div className="min-h-screen bg-white text-[#1c1917]" style={{ fontFamily: "Georgia, serif" }}>

      {/* Nav */}
      <div className="px-8 py-6 border-b border-stone-100">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <Link href="/writing" className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors">
            ← Writing
          </Link>
          <Link
            href="/writing/the-integration-of-technology-into-modern-society"
            className="font-mono text-xs tracking-[.1em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            ← Part I
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-16">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10 font-mono">
          <span className="text-[10px] tracking-[.2em] uppercase text-stone-400">2025</span>
          <span className="text-stone-200">·</span>
          {["Philosophy", "Technology", "AI", "Society"].map((t) => (
            <span key={t} className="text-[10px] tracking-[.15em] uppercase text-stone-400">{t}</span>
          ))}
          <span className="text-stone-200">·</span>
          <span className="text-[10px] tracking-[.15em] uppercase text-stone-400">Part II</span>
        </div>

        {/* ── ENGLISH ── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[.25em] uppercase text-stone-300 border border-stone-200 px-3 py-1 rounded">English</span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-light leading-[1.2] tracking-tight text-stone-800 mb-3">
            The Integration of Technology<br />into Modern Society
          </h1>
          <p className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 mb-12">Part II</p>

          <div className="flex flex-col gap-7">
            {paragraphsEN.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] text-stone-600">{p}</p>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-6 my-16">
          <div className="flex-1 h-px bg-stone-100" />
          <span className="font-mono text-[10px] tracking-[.3em] uppercase text-stone-300">· · ·</span>
          <div className="flex-1 h-px bg-stone-100" />
        </div>

        {/* ── TÜRKÇE ── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[.25em] uppercase text-stone-300 border border-stone-200 px-3 py-1 rounded">Türkçe</span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-light leading-[1.2] tracking-tight text-stone-800 mb-3">
            Teknolojinin Modern<br />Topluma Girişi
          </h2>
          <p className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 mb-12">II. Bölüm</p>

          <div className="flex flex-col gap-7">
            {paragraphsTR.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] text-stone-600">{p}</p>
            ))}
          </div>
        </section>

        {/* ── AÇIKLAMA NOTLARI ── */}
        <div className="flex items-center gap-6 my-16">
          <div className="flex-1 h-px bg-stone-100" />
          <span className="font-mono text-[10px] tracking-[.3em] uppercase text-stone-300">· · ·</span>
          <div className="flex-1 h-px bg-stone-100" />
        </div>

        <section>
          <p className="font-mono text-[10px] tracking-[.25em] uppercase text-stone-400 mb-10">
            Glossary, Kavramlar
          </p>

          <div className="flex flex-col gap-8">
            {notes.map((note) => (
              <div key={note.term} className="rounded-xl border border-stone-100 bg-stone-50 overflow-hidden">
                {/* Term header */}
                <div className="px-6 py-4 border-b border-stone-100 flex items-baseline gap-4">
                  <span className="text-base font-medium text-stone-800" style={{ fontFamily: "Georgia, serif" }}>
                    {note.term}
                  </span>
                  {note.termTR !== note.term && (
                    <span className="font-mono text-xs text-stone-400">/ {note.termTR}</span>
                  )}
                </div>

                {/* EN body */}
                <div className="px-6 pt-5 pb-4">
                  <p className="font-mono text-[10px] tracking-[.2em] uppercase text-stone-300 mb-3">EN</p>
                  <p className="text-sm leading-[1.85] text-stone-500">{note.bodyEN}</p>
                </div>

                {/* TR body */}
                <div className="px-6 pt-3 pb-5 border-t border-stone-100">
                  <p className="font-mono text-[10px] tracking-[.2em] uppercase text-stone-300 mb-3">TR</p>
                  <p className="text-sm leading-[1.85] text-stone-500">{note.bodyTR}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-stone-100 flex items-center justify-between">
          <Link href="/writing" className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors">
            ← Back to Writing
          </Link>
          <Link
            href="/writing/the-integration-of-technology-into-modern-society"
            className="font-mono text-xs tracking-[.1em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            ← Part I
          </Link>
        </div>

      </div>
    </div>
  );
}
