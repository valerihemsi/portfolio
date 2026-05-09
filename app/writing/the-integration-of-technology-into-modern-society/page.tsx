import Link from "next/link";

const paragraphsEN = [
  `The ideological structure in which humans are central, consumption is not the primary driver, and productivity is greater, one governed by social determinism, that is, social constructivism, rests on the idea that human reason is the engine of progress. In this understanding, humans think and decide while technology serves as the tool that executes those decisions; in other words, society shapes technology. Evaluating the process through which modern society has taken shape, beginning with the Industrial Revolution and extending to the present day, or more precisely, the process by which a human-centered understanding of progress has given way to a techno-deterministic perspective in which technology's mode of operation directs social structure, is only possible by taking into account the effects of the social transformation that has occurred throughout this process.`,
  `With the Industrial Revolution, technology's role in our lives grew steadily, moving beyond being a mere tool and beginning to fundamentally transform social structure and consumption habits. This transformation did not happen overnight; on the contrary, it arrived as the product of a long historical process. Today, we are living through the latest stage of that process. The entry of artificial intelligence into our lives represents a new phase of this transformation. As the pace of technological change accelerated, approaches centered on human agency and social determinacy gradually gave way to a techno-deterministic perspective. Thus, a structure emerged in which society shapes technology just as much as technology shapes society. With the addition of artificial intelligence to this process, ideological and cultural transformation has begun to evolve in a distinctly different direction. The growing tendency of society's value perception to become materially oriented, the association of value with money, and the increasing dependence of earning money on technology have led to meaning and value being defined through technology. This process has prepared the ground for the strengthening of a techno-determinist understanding that equates a society's level of development with its degree of technological advancement. The techno-determinist process, in which society directs technology and technology in turn shapes society, may move in an entirely different direction once technology acquires the power to direct itself. This structure carries the potential to cognitively restructure the human mind at a societal level. For this reason, the emergence of artificial intelligence can be regarded not merely as a new stage in technological development, but as the starting point of a new era that transforms the social and cognitive effects of the techno-determinist process.`,
  `From the 17th and 18th centuries onward, our social existence began to change at its foundations. This change brought about a collective reorganization of our daily lives, consumption habits, ethical perceptions, and beliefs. As production capacity grew, the relationship between humans and production, as well as the understanding of social order, began to shift. The fact that there had never previously been a period in which consumption exceeded production and labor was entirely surrendered to a machine opened up space for society to develop new habits by introducing unprecedented innovations. The shift toward consumption as the dominant paradigm, and the removal of production from human hands in a physical sense, while enabling many forms of innovation and development, transformed the human capacity for production from something physical into something predominantly cognitive.`,
  `As we live in an order where money translates into value and value translates into social meaning and status, money has increasingly become something obtained through technological means. In this process, technology has moved beyond being a tool managed by human cognitive faculties and used to meet human needs, becoming instead the primary instrument of value production. As the collective means of obtaining value became tied to technology, using technology as a tool became a necessity. Even though humans have continued to be the subjects who operate technology, technology has positioned itself at the center of economic and social value production. This transformation has led to human productivity becoming largely dependent on technology. The construction of value perception through money, the dependence of earning money on technology, and the definition of value and meaning through technology have radicalized this condition to the point of creating a world in which a society's level of development is measured by its technological advancement. This ideology has in turn prepared the ground for the adoption of a techno-determinist worldview.`,
  `The increase in production through mechanization caused consumption to rise in parallel and reshaped the perception of consumption from the ground up. This increase steered society away from producing and toward consuming, fundamentally restructuring its needs. With the integration of social media and the digital world into our physical lives, the values that individuals construct in the digital realm have also begun to take on a different dimension. Although the consequences of this change have emerged over the long term, they have gradually become normalized precisely because they transformed social structure from the very beginning and reshaped the way humans perceive themselves. The resulting "new normal" has required a redefinition of what normality means, since it has altered the relationship humans have with themselves. While this redefinition has in some respects developed the way the human mind operates, the fact that educational institutions shaped by the Industrial Revolution were built to produce a working class has meant that even as cognitive capacity has grown, its utilization has diminished, giving rise to a new average or idealized level of cognitive development.`,
  `The fact that the technological transformation that began with the Industrial Revolution altered social structure, modes of production, and the way individuals perceive themselves has in truth transformed not only material life, but also what people believe and how they believe it. For social order is constructed not only through economic or technical structures, but equally through the shared worlds of meaning that people collectively adopt. Technology's reshaping of everyday life has also transformed individuals' perception of reality, their modes of value production, and the order they consider "normal." The new social structure shaped by technology has thus made it necessary to rethink how shared beliefs and collective narratives are formed. For this reason, in order to understand why we believe in particular systems within a technologically transformed social structure, we must look to the social narratives from which those beliefs are nourished.`,
  `Belief in systems is born from the stories of societies. The narrative, the story, that a society takes as "true" is accepted by individuals and becomes a shared fundamental reality within that society. It is through these shared beliefs that systems such as law, money, and religion emerge and continue to function. These systems maintain their validity through social contracts. If a sufficiently large portion of a society believes in these systems, those systems acquire reality. Stories form the foundation of beliefs, and beliefs form the foundation of social order.`,
  `Societies bind individuals to one another through shared beliefs formed within themselves. Shared beliefs consist of collectively accepted common narratives. Narratives are told through language. Language is one of the most important instruments for constructing and shaping social order. The way language is used enables social narratives to take shape, to spread, and to be adopted. Control over narratives means control over order, and therefore over society. Although the formation of social narratives can occur organically, as the dissemination of knowledge becomes democratized within an institutionalized social order, it acquires through technology the power to be manipulated, shaping social ideology or radicalizing different groups within their own worldviews.`,
  `Knowledge is power, and power is control. The authority that seizes control over knowledge and its distribution within a society also holds the capacity to shape social truths. The scholastic period before the Renaissance offers a clear example: through its dominance over sources of knowledge, the Church restricted the public's access to information, thereby enabling it to shape social narratives and impose its own beliefs upon society in absolute terms. The power over "reality" held by an unquestioned "source of knowledge" enables that source to shape reality at the social level. A source that holds the authority to shape social narratives through language can rewrite social truths from the ground up, positioning itself to organize reality according to its own design. In other words, the source that holds power over the distribution of knowledge can establish ideological dominance over society.`,
  `Today, however, control over knowledge is no longer concentrated in the hands of a single religious or political authority; instead, it has transformed into a far more complex structure reproduced through digital technologies and algorithmic systems. The processes by which knowledge is produced, put into circulation, and granted legitimacy are now determined not only by traditional authorities, but also by digital platforms, data flows, and artificial intelligence-supported systems. This reveals that a new center of power has emerged in the formation of social reality and shared narratives.`,
];

const paragraphsTR = [
  `İnsanın merkezde olduğu, tüketim esaslı olmayan ve üretkenliğin daha fazla olduğu; toplumsal determinizm, yani sosyal yapısalcılığın hakim olduğu ideolojik yapı, insan aklının ilerlemenin motoru olduğu düşüncesine dayanır. Bu anlayışta insan düşünür ve karar verir, teknoloji ise bu kararı uygulayan araçtır; yani toplum teknolojiyi şekillendirir. Sanayi Devrimi ile başlayan ve günümüze kadar uzanan modern toplum yapısının şekillendiği süreci, daha doğru bir ifadeyle insan merkezli ilerleme anlayışının yerini, teknolojinin çalışma biçimiyle toplumsal yapıyı yönlendirdiği tekno-deterministik bir bakış açısına bırakma sürecini değerlendirmek, ancak bu süreçte gerçekleşen toplumsal değişimin etkilerini göz önünde bulundurarak mümkündür.`,
  `Sanayi Devrimi ile birlikte teknolojinin hayatımızdaki rolü giderek artmış, bir araç olmanın ötesine geçerek toplumsal yapıyı ve tüketim alışkanlıklarını köklü biçimde dönüştürmeye başlamıştır. Bu dönüşüm bir anda gerçekleşmemiş; aksine uzun bir tarihsel sürecin sonucu olarak günümüze ulaşmıştır. Bugün, bu sürecin geldiği son aşamayı deneyimlemekteyiz. Yapay zekanın hayatımıza girmesi ise bu dönüşümün yeni bir evresini temsil etmektedir. Teknolojik değişimin hız kazanmasıyla birlikte, insan merkezli ve toplumsal belirleyiciliği esas alan yaklaşımlar giderek yerini tekno-determinist bir bakış açısına bırakmıştır. Böylece, toplumun teknolojiye yön verdiği kadar teknolojinin de toplumu biçimlendirdiği bir yapı ortaya çıkmıştır. Yapay zekanın bu sürece eklenmesiyle birlikte, ideolojik ve kültürel dönüşüm daha farklı bir yöne evrilmeye başlamıştır. Toplumun değer algısının giderek materyal odaklı hale gelmesi, değerin parayla ilişkilendirilmesi ve para kazanmanın da teknolojiye bağımlı bir yapı kazanması, anlamın ve değerin teknoloji üzerinden tanımlanmasına yol açmıştır. Bu süreç de, bir toplumun gelişmişlik düzeyinin teknolojik ilerleme seviyesiyle doğru orantılı olduğunu savunan tekno-determinizm anlayışının güçlenmesine zemin hazırlamıştır. Toplumun teknolojiye yön verdiği, teknolojinin de toplumu biçimlendirdiği tekno-determinist süreç, teknolojinin kendi kendini yönlendirme gücünü eline almasıyla bambaşka bir yöne doğru ilerleyebilir. Bu yapı, toplumsal anlamda insan zihnini yeniden yapılandırma potansiyeli taşır. Bu nedenle, yapay zekanın ortaya çıkışı yalnızca teknolojik gelişimin yeni bir aşaması değil, aynı zamanda tekno-determinist sürecin toplumsal ve bilişsel etkilerini değiştiren yeni bir devrin başlangıç noktası olarak değerlendirilebilir.`,
  `17. ve 18. yüzyıllardan itibaren toplumsal anlamda yaşantımız temelinden değişim göstermeye başlamıştır. Bu değişim, gündelik hayatımızın, tüketim alışkanlıklarımızın, etik algımızın ve inançlarımızın kolektif anlamda yeniden düzenlenmesine neden olmuştur. Üretim kapasitesinin büyümesiyle birlikte insanın üretimle kurduğu ilişki ve toplumsal düzen anlayışı da değişmeye başlamıştır. Tarih boyunca tüketimin üretimden fazla olduğu, iş gücünün tamamen bir araca teslim edildiği bir dönemin daha önce yaşanmamış olması, eşi benzeri olmayan yenilikler getirerek toplumun yeni alışkanlıklar edinebilmesine alan açmıştır. Tüketimin esas alınmaya başlanması ve üretimin fiziksel güç anlamında insanın elinden çıkması, birçok anlamda yenilik ve gelişim sağlasa da, insanın üretme becerisini fiziksel olmaktan çok zihinsel hale getirmiştir.`,
  `Paranın değere, değerin ise toplumsal anlam ve statüye dönüştüğü bir düzende yaşamamızla birlikte, para giderek teknolojik araçlar aracılığıyla elde edilen bir değer haline gelmiştir. Bu süreçte teknoloji, insanın zihinsel yetileriyle yönettiği ve ihtiyaçlarını karşılamak için kullandığı bir araç olmanın ötesine geçerek değer üretiminin temel aracı olmuştur. Kolektif olarak değer elde etme biçimi teknolojiye bağlandıkça, teknolojiyi araç olarak kullanmak bir zorunluluk haline gelmiştir. Her ne kadar teknolojiyi yöneten özne insan olmaya devam etse de, teknoloji ekonomik ve toplumsal değer üretiminin merkezine yerleşmiştir. Bu dönüşüm, insan üretkenliğinin büyük ölçüde teknolojiye bağımlı hale gelmesine yol açmıştır. Değer algısının para üzerinden kurulması, para kazanmanın da teknolojiye bağımlı hale gelmesi, değer ve anlamın teknoloji üzerinden tanımlanması durumunu radikalleştirerek, toplumun gelişmişlik düzeyinin teknolojik ilerlemesiyle ölçüldüğü bir dünya yaratmıştır. Bu ideoloji ise tekno-determinizm anlayışının benimsenmesine zemin hazırlamıştır.`,
  `Üretimin makineleşme sayesinde artması, tüketimin de buna paralel olarak artmasına ve tüketim algısının baştan şekillenmesine sebep olmuştur. Bu artış, toplumu üretmekten çok tüketmeye yöneltmiş ve ihtiyaçlarını temelden yeniden şekillendirmiştir. Sosyal medya ve dijital dünyanın fiziksel yaşamımıza entegre olmasıyla, bireylerin dijital dünyada oluşturdukları değerler de farklı bir boyut kazanmaya başlamıştır. Bu değişimin sonuçları her ne kadar uzun vadede ortaya çıkmış olsa da, toplumsal yapıyı en başından dönüştürdüğü ve insanın kendini algılama biçimini yeniden şekillendirdiği için zamanla normalleşmeye başlamıştır. Böylece ortaya çıkan bu "yeni normal" anlayışı, insanın kendisiyle kurduğu ilişkiyi değiştirdiğinden, normal kavramının da yeniden tanımlanmasını gerekli kılmıştır. Bu yeniden tanımlama, insanın zihnini kullanma biçimini bir yönüyle geliştirmiş olsa da, Sanayi Devrimi ile şekillenen eğitim kurumlarının işçi sınıfı yetiştirmeye yönelik bir yapıda kurulmuş olması nedeniyle, bilişsel kapasite gelişse bile bunun kullanımı azalmış; böylece ortalama ya da ideal kabul edilen yeni bir bilişsel gelişim düzeyi ortaya çıkmıştır.`,
  `Sanayi Devrimi ile başlayan teknolojik dönüşümün toplumsal yapıyı, üretim biçimlerini ve bireyin kendini algılama şeklini değiştirmesi, aslında yalnızca maddi yaşamı değil, insanların neye ve nasıl inandığını da dönüştürmüştür. Çünkü toplumsal düzen yalnızca ekonomik ya da teknik yapılarla değil, aynı zamanda insanların ortak olarak benimsediği anlam dünyalarıyla kurulur. Teknolojinin gündelik yaşamı yeniden biçimlendirmesi, bireylerin gerçeklik algısını, değer üretme biçimlerini ve "normal" kabul ettikleri düzeni de değiştirmiştir. Böylece teknolojiyle şekillenen yeni toplumsal yapı, ortak inançların ve kolektif hikayelerin nasıl oluştuğunu yeniden düşünmeyi gerekli kılmıştır. Bu nedenle, teknolojinin dönüştürdüğü toplumsal yapı içinde hangi sistemlere neden inandığımızı anlamak için, bu inançların beslendiği toplumsal hikayelere bakmak gerekir.`,
  `Sistemlere karşı inanç, toplumların hikayelerinden doğar. Bir toplumun kendine "doğru" olarak aldığı anlatı, yani hikaye, bireyler tarafından kabul edilerek toplum içinde ortak temel gerçekliklere dönüşür. Bu ortak inançlar sayesinde hukuk, para ve din gibi sistemlerin ortaya çıkması ve yürürlüğünü sürdürmesi mümkün olur. Bu sistemler, toplumsal sözleşmeler aracılığıyla geçerliliklerini korur. Bir toplumun yeterince büyük bir kısmı bu sistemlere inanırsa, bu sistemler gerçeklik kazanır. Hikayelerin temeli inançları, inançlar da toplumsal düzeni oluşturur.`,
  `Toplumlar, kendi içlerinde oluşmuş ortak inançlar aracılığıyla bireyleri birbirine bağlar. Ortak inançlar, kolektif anlamda kabul edilmiş ortak hikayelerden oluşur. Hikayeler dil aracılığıyla anlatılır. Dil, toplumsal düzeni kurmakta ve şekillendirmekte en önemli araçlardan biridir. Dilin kullanım biçimi, toplumsal hikayelerin şekillenmesini, yayılmasını ve benimsenmesini sağlar. Hikayelerin kontrolü, düzenin; dolayısıyla toplumun kontrolü anlamına gelir. Toplumsal hikayelerin biçimlenmesi organik şekilde gerçekleşebilse de, kurumsallaşmış toplum düzeninde bilginin yayılması demokratize oldukça, teknoloji aracılığıyla manipülasyona uğrayarak toplumsal ideolojiyi şekillendirebilir ya da farklı grupları kendi görüşleri içinde radikalleştirebilir bir güce sahip olur.`,
  `Bilgi eşittir güç, güç eşittir kontroldür. Bir toplumda bilgi ve bilginin dağıtımı üzerindeki gücü eline alan otorite, toplumsal doğruları da şekillendirme yetkisini taşır. Örnek olarak Rönesans öncesi skolastik dönem, kilisenin bilgi kaynakları üzerindeki hakimiyeti sayesinde halkın bilgiye ulaşımını kısıtlamış; böylece toplumsal hikayeleri şekillendirebilmesini ve kendi inancını topluma mutlak biçimde benimsetebilmesini sağlamıştır. Sorgulanmadan inanılan "bilgi kaynağının" elinde tuttuğu "gerçeklik" gücü, gerçekliği toplumsal anlamda biçimlendirebilmesini sağlar. Toplumsal hikayeleri dil aracılığıyla şekillendirme yetkisine sahip olan kaynak, toplumsal doğruları baştan yazarak gerçekliği kendi istediği şekilde düzenleyebilir hale gelir. Yani bilginin dağıtımı üzerindeki gücü elinde tutan kaynak, ideolojik anlamda toplum üzerinde hakimiyet kurabilir.`,
  `Günümüzde ise bilgi üzerindeki kontrol, tek bir dini ya da siyasal otoritenin elinde toplanmaktan çok, dijital teknolojiler ve algoritmik sistemler aracılığıyla yeniden üretilen daha karmaşık bir yapıya dönüşmüştür. Bilginin üretilmesi, dolaşıma girmesi ve doğruluk kazanması süreçleri artık yalnızca geleneksel otoriteler tarafından değil; dijital platformlar, veri akışları ve yapay zeka destekli sistemler tarafından da belirlenmektedir. Bu durum, toplumsal gerçekliğin ve ortak hikayelerin oluşumunda yeni bir güç merkezinin ortaya çıktığını göstermektedir.`,
];

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1917]" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Nav */}
      <div className="px-8 py-6 border-b border-stone-100">
        <Link
          href="/writing"
          className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
          style={{ fontFamily: "monospace" }}
        >
          ← Writing
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-16">

        {/* Meta */}
        <div className="flex items-center gap-4 mb-10" style={{ fontFamily: "monospace" }}>
          <span className="text-[10px] tracking-[.2em] uppercase text-stone-400">2025</span>
          <span className="text-stone-200">·</span>
          {["Philosophy", "Technology", "Society"].map((t) => (
            <span key={t} className="text-[10px] tracking-[.15em] uppercase text-stone-400">{t}</span>
          ))}
          <span className="text-stone-200">·</span>
          <span className="text-[10px] tracking-[.15em] uppercase text-stone-400">12 min read</span>
        </div>

        {/* ── ENGLISH ── */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[.25em] uppercase text-stone-300 border border-stone-200 px-3 py-1 rounded">
              English
            </span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-light leading-[1.2] tracking-tight text-stone-800 mb-12">
            The Integration of Technology<br />into Modern Society
          </h1>

          <div className="flex flex-col gap-7">
            {paragraphsEN.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] text-stone-600">
                {p}
              </p>
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
        <section>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[.25em] uppercase text-stone-300 border border-stone-200 px-3 py-1 rounded">
              Türkçe
            </span>
            <div className="flex-1 h-px bg-stone-100" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-light leading-[1.2] tracking-tight text-stone-800 mb-12">
            Teknolojinin Modern<br />Topluma Girişi
          </h2>

          <div className="flex flex-col gap-7">
            {paragraphsTR.map((p, i) => (
              <p key={i} className="text-base leading-[1.9] text-stone-600">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <div className="mt-20 pt-8 border-t border-stone-100">
          <Link
            href="/writing"
            className="font-mono text-xs tracking-[.15em] uppercase text-stone-400 hover:text-stone-700 transition-colors"
            style={{ fontFamily: "monospace" }}
          >
            ← Back to Writing
          </Link>
        </div>

      </div>
    </div>
  );
}
