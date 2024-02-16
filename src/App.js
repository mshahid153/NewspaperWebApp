import {Route, Routes,Navigate} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import NewsDetails from './Components/NewsDetails';
import TabNews from './Components/TabNews';
import SearchPage from './Components/SearchPage';
import EPaper from './Components/EPaper';
import NotFound from './Components/NotFound';

let articles = [
  {
     id: 1,
     title: 'Day 3 protest: Farmers to block trains today, hold round 3 talks with Centre',
     content: 'Farmers Delhi Chalo protest: 3 Union ministers will meet farmers leaders in Chandigarh for the third round of talks amid stand-off at Haryana, Punjab borders.Several major farmers’ unions have extended their support to the protesting farmer unions at Shambhu border and Khanauri border in Punjab, with the Bharatiya Kisan Union (Ugrahan) and BKU Dakaunda (Dhaner faction) announcing a ‘rail roko’ (stop trains) in the state on Thursday between 12 noon and 4 pm on Thursday, February 15. The Samyukt Kisan Morcha, an umbrella body of 37 farm unions, have also supported the ongoing protests. The protesters are demanding a minimum support price or MSP for their crops.A protester uses water to disperse tear gas, as farmers march towards New Delhi to press for better crop prices promised to them in 2021, at Shambhu, a border crossing between Punjab and Haryana. (REUTERS)A protester uses water to disperse tear gas, as farmers march towards New Delhi to press for better crop prices promised to them in 2021, at Shambhu, a border crossing between Punjab and Haryana. (REUTERS)These unions had played key roles in the protests on Delhi’s fringes in 2021 and have joined the current protests citing the “condemnable use of violence” against farmers. BKU (Ugrahan) general secretary Sukhdev Singh Kokri Kalan has slammed the police action.Discover the thrill of cricket like never before, exclusively on HT. Explore now! “We stand with them in solidarity. To prove it, our supporters will hold rail roko (stop trains) at as many places as we can,” he announced. The organisation will block train tracks in Punjab between 12pm and 4pm on Thursday, he said, a day before the larger nationwide strike planned for February 16. Follow Live Updates on farmers protest',
     author: 'Deebak Kumar',
     publishedDate: '2024-02-15',
     imageUrl: 'https://i.postimg.cc/Bb7xRrS1/INDIA-FARMERS-PROTESTS-28-1707958565170-1707958594541.avif',
     tabId : 'india'
  },
  {
     id: 2,
     title: 'Maharashtra Speaker rejects plea to disqualify MLAs of Ajit Pawar faction',
     content: `Maharashtra Assembly Speaker Rahul Narwekar on Thursday dismissed the petitions to disqualify MLAs belonging to Ajit Pawa'sr faction, ruling that his faction substantially outnumbered the Sharad Pawar faction in the state legislature.NCP founder-leader Sharad Pawar and nephew Ajit Pawar (left).NCP founder-leader Sharad Pawar and nephew Ajit Pawar (left).“I hold that the Ajit Pawar faction enjoys an overwhelming majority within the NCP,” Narwekar declared while delivering a verdict on the disqualification petitions filed by the two factions within the Nationalist Congress Party (NCP) against each other.`,
     author: 'Patel',
     publishedDate: '2024-02-12',
     imageUrl: 'https://i.postimg.cc/brYxKPKq/ajit-pawar-sharad-pawar-ncp-mla-1707996459277-1707996459456.jpg',
     tabId : 'india'
 },
 {
     id: 3,
     title: 'India’s 1st helicopter emergency medical service to start from Uttarakhand',
     content: 'Dehradun: India’s first Helicopter Emergency Medical Service (HEMS) will be started from Uttarakhand, Union aviation minister Jyotiraditya Scindia said on Thursday.Helicopter Emergency Medical Services (HEMS) would operate under project Sanjeevani (Representative Photo)Helicopter Emergency Medical Services (HEMS) would operate under project Sanjeevani (Representative Photo)Scindia on X informed that a helicopter will be deployed at All Indian Institute of Medical Science in Rishikesh from where it can be sent anywhere within a radius area of 150 km to airlift the people to the hospital.Discover the thrill of cricket like never before, exclusively on HT. Explore now!He said that HEMS would operate under project ‘Sanjeevani’. The helicopter is being assembled at present and is under the certification process. “Assembly and certification of the helicopter to be deployed for the purpose is underway. It is on my dashboard. It is entirely my concern now not yours,” Scindia said.The development comes a day after Scindia virtually inaugurated the newly constructed terminal building (phase-2) at Jolly Grant Airport Dehradun along with chief minster Pushkar Singh Dhami, who joined the event from Jolly Grant Airport.Scindia said the terminal built at a cost of ₹486 crore will be capable of serving 3,240 passengers during peak hours and 4.7 million passengers annually.Elaborating on efforts to improve air connectivity in the state, Scindia said, “The government is upgrading three airports in Uttarakhand which include Dehradun, Pant Nagar, Pithoragarh.” The number of heliports will be increased to 21 in the upcoming years, he said.In December, the Uttarakhand cabinet approved Uttarakhand Helipad and Heliport Policy 2023 to meet the challenges in accessing remote areas in the hilly regions of the state, especially where emergency medical and disaster-related services are required.The policy was proposed by the Uttarakhand Civil Aviation Development Authority (UCADA), which is the nodal body for the development of civil aviation infrastructure and ecosystems in the state. The policy has been prepared under the Empowered Uttarakhand Mission of the state government.',
     author: 'Rakesh Raj',
     publishedDate: '2024-02-15',
     imageUrl: 'https://i.postimg.cc/HkLpjNCj/Helicopter-Emergency-Medical-Services-HEMS-would-1707997905683.avif',
     tabId : 'india'
 },
 {
     id: 4,
     title: `PM Modi's graph high, see what happened in Qatar: BJP reacts to farmer leader's viral video`,
     content: `BJP leader Ravi Shankar Prasad on Thursday said Prime Minister Narendra Modi's graph is huge and an example of that is how Qatar released the Navy veterans who were given death sentences earlier. The BJP leader's comment came in reaction to farmer leader Jagjit Singh Dallewal's viral video in which the farmer leader purportedly said that they have to bring 'PM Modi's graph down' which went up after the inauguration of the Ram Temple. "Yes, I have seen the video though I don't want to comment on that. PM Modi's graph is big for a long time. He is a world leader. You have seen what happened in Abu Dhabi. In Qatar, our Navy veterans were going to be hanged but they were released. So be it in the country or outside, PM Modi's graph is big because of his honest work," the BJP leader said.BJP said PM Modi's graph has been very high for quite some time now. (PTI)BJP said PM Modi's graph has been very high for quite some time now. (PTI)Farmers protest: Follow LIVE updatesDiscover the thrill of cricket like never before, exclusively on HT. Explore now!Jagjit Singh Dallewal's video has become the latest political flashpoint as the farmers who called the Chalo Dilli march termed their protest as non-political. Information and broadcasting ministry advisor Kanchan Gupta shared the video of Dallewal and said the actual agenda of the farmers stands exposed. "Modi's graph has gone up a lot after Ram Mandir. That's a loss. How can his graph be brought down," Dallewal purportedly said in the video.Punjab farmers have been camping on the borders of Punjab and Haryana for the last three days as the Haryana police foiled their attempt to enter Haryana and then travel to Delhi according to their 'Chalo Dilli' march called on February 13. The third round of talks between the protesters and the Central delegation will take place in Chandigarh on Thursday. Haryana chief minister Manohar Lal Khattar condemned the ongoing protest and said the farmers have right to go to Delhi but not like an army with tractors and earthmovers; they can use public transport, the chief minister said asserting that Haryana police will continue resisting them on the border. Dallewal's statement was a straight political one, the Haryana chief minister said.`,
     author: 'Khurshid Shamsuddin',
     publishedDate: '2024-02-11',
     imageUrl: 'https://i.postimg.cc/Fs69dZFZ/PM-Modi-graph-viral-video-1707997222021-1707997222257.avif',
     tabId : 'india'
 },
 {
     id: 5,
     title: `TMC's Mimi Chakraborty resigns from MP post; Mamata yet to accept`,
     content: `Trinamool Congress leader Mimi Chakraborty has announced her resignation from the post of MP, ANI reported on Thursday. The leader has reportedly handed over her resignation to Trinamool Congress chief Mamata Banerjee.Mimi Chakraborty Speaking about her resignation from the MP post Chakraborty said that though she had resigned her resignation had not been accepted by Mamata Banerjee. "I have definitely resigned, but my resignation hasn't been accepted. I have coordinated with the CM, and she assured me that she will take care of everything," Mimi Chakraborty said.Discover the thrill of cricket like never before, exclusively on HT. Explore now!“Politics is not for me. You have to promote someone here (in politics) if you are helping someone...Besides being a politician, I also work as an actor. I have equal responsibilities. If you join politics, you are criticised whether you work or not,” she added.Chakraborty reportedly resigned after expressing unhappiness with the party's local leadership.Mimi had recently resigned from the membership of two standing committees of parliament. She was a member of the standing committee on industrial affairs of parliament, and also a member of the joint committee of the union ministry of power and ministry of new and renewable energy.Chakraborty also resigned from the post of chairperson of two Rogi Kalyan samitis (hospital management committees) recently.Mimi Chakraborty is an MP from Jadavpur constituency in West Bengal. The development came months ahead of the 2024 Lok Sabha elections.`,
     author: 'Lokesh Sharma',
     publishedDate: '2024-02-14',
     imageUrl: 'https://i.postimg.cc/nVjZ8mG9/mimi-1707994391041-1707994406209.avif',
     tabId : 'india'
 },
 {
     id: 6,
     title: 'Supreme Court allows withdrawal of 8 petitions against UAPA, approach high court',
     content:`Trinamool Congress leader Mimi Chakraborty has announced her resignation from the post of MP, ANI reported on Thursday. The leader has reportedly handed over her resignation to Trinamool Congress chief Mamata Banerjee.Mimi Chakraborty Speaking about her resignation from the MP post Chakraborty said that though she had resigned her resignation had not been accepted by Mamata Banerjee. "I have definitely resigned, but my resignation hasn't been accepted. I have coordinated with the CM, and she assured me that she will take care of everything," Mimi Chakraborty said.Discover the thrill of cricket like never before, exclusively on HT. Explore now!“Politics is not for me. You have to promote someone here (in politics) if you are helping someone...Besides being a politician, I also work as an actor. I have equal responsibilities. If you join politics, you are criticised whether you work or not,” she added.Chakraborty reportedly resigned after expressing unhappiness with the party's local leadership.Mimi had recently resigned from the membership of two standing committees of parliament. She was a member of the standing committee on industrial affairs of parliament, and also a member of the joint committee of the union ministry of power and ministry of new and renewable energy.Chakraborty also resigned from the post of chairperson of two Rogi Kalyan samitis (hospital management committees) recently.Mimi Chakraborty is an MP from Jadavpur constituency in West Bengal. The development came months ahead of the 2024 Lok Sabha elections.`,
     author: 'Abraham Thomas',
     publishedDate: '2024-02-15',
     imageUrl: 'https://i.postimg.cc/hthNxWZz/The-petitions-withdrawn-on-Thursday-include-a-publ-1707989788297.avif',
     tabId : 'india'
 },
 {
     id: 7,
     title: 'As mobs try to loot weapons from Manipur armouries, 1 shot dead',
     content: 'Amidst renewed escalation in violence in Manipur, state armouries were targeted again on Tuesday night, resulting in the death of a person who was allegedly in the crowd that attempted to breach one armoury and successful looted another.The state this week has been witnessing intense gunfights, particularly in the peripheral areas of Meitei-majority Imphal East district and Kuki-Zomi-majority Kangpokpi district. As firing continued in different parts on Tuesday, at least two attempts were made by mobs to storm Manipur police establishments.During this, one person died after allegedly attempting to storm the 6th IRB battalion at Pangei in Imphal East on Tuesday night, official sources said. The person was injured when security forces pushed back the mob, and he succumbed to injuries on the way to Jawaharlal Nehru Institute of Medical Sciences.“A large group of people had gathered there at around 10 pm. It can only be deduced that the motive was to seize arms from the establishment… They stormed well into the security perimeter. They broke the gate and entered the armoury area,” said a senior police official.The 5th IRB batallion located in Imphal East’s Thengju Chingjin was also similarly mobbed and a police official confirmed that the mob seized arms and ammunition from there.',
     author: 'Madhan Kumar',
     publishedDate: '2024-02-13',
     imageUrl: 'https://i.postimg.cc/HWhKQWRw/Manipur.avif',
     tabId : 'india'
 },
 {
     id: 8,
     title: 'Kerala wants Central Act amended so animals that pose threat to human life can be killed',
     content: 'Kerala Assembly on Wednesday passed a resolution urging the Central Government to make necessary amendments in the relevant sections of the Wildlife Protection Act to address the escalating man-animal conflict in the state.The resolution was moved by Forest Minister A K Saseendran under Rule 118 of Procedure and Conduct of Business in the Assembly. The resolution wanted an amendment in the Act so as to grant permission to cull a wild animal which has become a threat to human life and also simplify the norms and procedures accordingly. Besides, it wanted that wild boar, which has posed a major threat to human life and crops in the state, be declared vermin.The resolution sought an amendment to the section 11 (1) (a) of the Act, which empowers the Chief Wildlife Warden to permit any person to kill a wild animal specified in schedule one if the officer feels that it has become dangerous to human life or is severely disabled or sick beyond recovery.The state government wanted that the powers given to the chief wildlife warden be delegated to the chief forest conservators for taking immediate steps.The government wanted wild boar to be declared as vermin as per section 62 of the Act. Once declared vermin, culling of wild boars, which create havoc in agricultural land, would be permitted for a certain period.',
     author: 'Thomas Shelby',
     publishedDate: '2024-02-15',
     imageUrl: 'https://i.postimg.cc/v8t7s0Lc/elephants-1600-1.avif',
     tabId : 'india'
 },
 {
  id: 11,
  title: 'IMD forecasts light rain in Kolkata, orange alert issued for three districts',
  content: 'Meteorological Department has predicted light-intensity rainfall in Kolkata and its nearby areas. Between Thursday and Friday, light rainfall or thunder is likely to occur in the city, said Weather Office today. According to the Met official, rain is likely to occur during the afternoon or evening. Maximum and minimum temperature most likely to hover around 28.3 degrees celsius and 19.5 degrees celsius. According to the Meteorological Department Dumdum the highest temperature recorded is 29.4 degrees Celsius. The minimum temperature in Kolkata is expected to hover around 18-19 degree Celsius till Sunday.Light rain or thunder is also likely to occur in most parts of West Bengal like North 24 Parganas, South 24 Parganas, East Midnapore, Howrah, Jhargram, West Midnapore, West Burdwan, East Burdwan, Nadia.Orange alert has been issued for three districts – Nadia East, Burdwan and Bankura. Low intensity rain, thunderstorm with lightning accompanied with hail and gusty wind (40-50kmph), is predicted in Nadia, East Burdwan and Bankura. Yellow alert has been issued for the Met official for Hooghly , Purulia, West Burdwan, Birbhum, Murshidabad.The minimum temperature in Purulia, Bishnupur, Krishnanagar and Bankura is expected to dip at 15 degrees celsius, Burdwan at 16 degrees Celsius and Sriniketan at 17 degree celsius.Meanwhile, Darjeeling is again set to drench in rain for this week with light rain or thunder likely to occur at one or two places. The minimum temperature in Darjeeling is expected to drop to 6.4 degree celsius and maximum is predicted to rise to 12.5 degree celsius. From Thursday till Friday yellow alert has been issued for Darjeeling, Jalpaiguri, Kalimpong, Alipurduar, Cooch Behar, North Dinajpur, South Dinajpur and Malda.',
  author: 'Khurshid Shamsuddin',
  publishedDate: 'Updated 5 mins ago',
  imageUrl: 'https://i.postimg.cc/R0YVrxqw/kolkata-rainfall-1600.avif',
  tabId : 'latest'
},
{
  id: 12,
  title: 'Who is Prabowo Subianto, the former general who’s Indonesia’s next president?',
  content: 'A wealthy ex-general with ties to both Indonesia’s popular outgoing president and its dictatorial past looks set to be its next leader. He’s promised to continue the outgoing president’s widely popular policies, but his human rights record has activists and some analysts concerned about the future of Indonesia’s democracy.Defense Minister Prabowo Subianto presented himself as heir to the immensely popular President Joko Widodo, vowing to continue the modernization agenda that’s brought rapid growth and vaunted Indonesia into the ranks of middle-income countries.“We should not be arrogant. We should not be proud,” Subianto said in a speech broadcast on national television from a sports stadium on the night of the election. “This victory must be a victory for all Indonesian people.”But Subianto will enter office with unresolved questions about the costs of rapid growth for the environment and traditional communities, as well as his own links to torture, disappearances and other human rights abuses in the final years of the brutal Suharto dictatorship, which he served as a lieutenant general.Other than promising continuity, Subianto has laid out few concrete plans, leaving observers uncertain about what his election will mean for the country’s growth and its still-maturing democracy.A former rival of Widodo who lost two presidential races to him, Subianto embraced the popular leader to run as his heir, even choosing Widodo’s son as his running mate, a choice that ran up against constitutional age limits and has activists worried about an emerging political dynasty in the 25-year-old democracy.Subianto’s win is not yet official.His two rivals have not yet conceded and the official results could take up to a month to be tabulated, but unofficial tallies showed him taking over 55% of the vote in a three-way race. Those counts, conducted by polling agencies and based on millions of ballots sampled from the across the country, have proved accurate in past elections.',
  author: 'Lokesh Sharma',
  publishedDate: 'Updated 13 mins ago',
  imageUrl: 'https://i.postimg.cc/XJFBNkZH/Untitled-design-3-5.avif',
  tabId : 'latest'
},
{
  id: 13,
  title: 'Delhi Budget to be delayed; prep took longer than expected, says Atishi',
  content: 'Delhi’s budget will not be presented next week as preparation took “longer than expected”, Finance Minister Atishi said Thursday.Delhi’s annual financial statement is sent to the L-G for his assent and comments. Once this process is complete, the L-G sends it back to the Chief Minister, who then forwards it to the Ministry of Home Affairs (MHA). Once approved, the budget can be tabled in the Legislative Assembly.The budget session of the Delhi Assembly commenced on Thursday with the L-G’s speech on the achievements of the Delhi government in the ongoing financial year. Officials said that the budget was supposed to be tabled on Monday.This is not the first time that Delhi’s budget presentation has been delayed. Last year, a day before it was to be presented, Delhi Chief Minister Arvind Kejriwal alleged that the MHA had not cleared the budget.This year, the Delhi government said that the delays were at its end. “We received L-G sahab’s approval on February 14. Earlier, the budget was passed by the cabinet on February 11, and on February 13, it was sent to L-G for his assent. There has been no delay from the L-G’s side. Today the budget will be sent to the MHA,” she added.',
  author: 'Khurshid Shamsuddin',
  publishedDate: 'Updated 3 hour ago',
  imageUrl: 'https://i.postimg.cc/cHy4hKhP/atishi-1600.jpg',
  tabId : 'latest'
},
{
  id: 14,
  title: 'Arbaaz Khan reveals Abbas-Mustan offered him Akshay Kumar’s role in Khiladi: ‘He became a big star but I…’',
  content: `Instead of making his acting debut as a villain, Arbaaz Khan could have been the Khiladi Khan of Bollywood had he not turned down the offer from filmmaker duo Abbas-Mustan to star in their 1992 action-thriller Khiladi. The film established Akshay Kumar’s place in the Hindi film industry as an action hero. Recently, Khan shared why he didn’t agree to take up Khiladi. He also revealed how Abbas-Mustan came back to him with their other film, Daraar, which fetched him the Filmfare Award for Best Villain.As Khan sat down for a free-wheeling chat with Indianexpress.com, he revisited his Bollywood debut in 1996 with Abbas-Mustan’s romantic thriller Daraar, also starring Juhi Chawla and Rishi Kapoor. “I was approached by the same directors for another film,” shared Arbaaz, while adding, “I couldn’t do it because I was signed up with another director. The film was Khiladi. I was offered Akshay Kumar’s role. But unfortunately, that other film also didn’t happen.”Khan said, “Akshay Kumar did the role. The movie became a big hit, and Akshay became a big star.” After the 1992 film, Kumar got the moniker of Khiladi Kumar and became one of the most sought-after action heroes in Bollywood. However, Abbas-Mustan had Khan in mind always, and they approached him again with their film Daraar.Also read | Arbaaz Khan defends age difference between him and wife Shura, says couples with large age-gaps have higher success rate“After Khiladi, they did Baazigar, and then they came to me with Daraar because they still felt they wanted me,” Khan shared. Initially hesitant to share how much he was paid for the film, the actor revealed he was paid Rs 1 lakh as the signing amount, “It was more like a break and money didnt really matter. It was just like a token amount. It didnt matter at that time as it was my debut.”Festive offerMore than the money, the appreciation he received for his performance and a Filmfare Award was a bigger reward for Arbaaz Khan. Sharing his experience of working on Daraar, he said,It was great to share the screen with established actors like Juhi Chawla and Rishi Kapoor. I, a newcomer, was pitted against them and to stand around them and to hold my own was not very easy but fortunately, with the help of the director and their own support as actors, I could really do well. That could be seen when the film was released, the appreciation that I got for it.`,
  author: 'Madhan Kumar',
  publishedDate: 'Updated 34 mins ago',
  imageUrl: 'https://i.postimg.cc/P59mtx3q/arbaaz-khan-khiladi.avif',
  tabId : 'latest'
},
{
  id: 15,
  title: 'India’s Gulf strategy wins: Acquittal in Qatar, $78B LNG deal and more',
  content: 'Written by Pankaj Saran ,safe and sound, and their acquittal is a most welcome development. There is a palpable sense of relief.Qatar is a unique country in the Gulf that has always punched well above its weight. It is a tiny piece of territory abutting the vast expanse of Saudi Arabia and Oman that has the highest per capita income in the region. It has successfully harnessed its mammoth oil and gas wealth to develop its infrastructure at a pace and scale that is nothing short of miraculous. Qatar’s grandeur was in evidence during the FIFA World Cup in 2022.Politically, Qatar has its fingers in several pies. It flaunts its risk-taking appetite. It has been in the eye of the intra-Gulf political storm when its relations with Saudi Arabia broke down and it was boycotted by the Gulf Cooperation Council (GCC) on charges of supporting Islamist and radical groups that threatened moderate regimes. It has been an outlier in the Arab world by maintaining significant links with Iran and yet hosts an American military base. In recent years, it played an active role in supporting the US project of exiting Afghanistan and installing the Taliban in Kabul. It is once again involved in doing what it does best — playing the role of a mediator, this time in the most vexatious conflict between Israel and Hamas. It has, in the form of Al Jazeera, built the most powerful media tool that has shaken the Arab world.',
  author: 'Deebak Kumar',
  publishedDate: 'Updated 45 mins ago',
  imageUrl: 'https://i.postimg.cc/SNYHGZX1/ayodhya-2024-02-15-T181905-243.avif',
  tabId : 'latest'
},
{
  id: 16,
  title: '59 per cent Indian enterprises have deployed AI, says IBM report',
  content: 'Research commissioned by IBM found that 59 per cent of the enterprise-scale organisations surveyed in India are actively using AI in their business.“The increase in AI adoption and investments by Indian enterprises is a good indicator that they are already experiencing the benefits from AI. However, there is still a significant opportunity to accelerate as many businesses are hesitant to move beyond experimentation and deploy AI at scale,” said Sandip Patel, Managing Director, IBM India & South Asia, in a press statement.Data and AI governance tools are going to be critical for building AI models responsibly so that enterprises can trust and confidently adopt AI, according to Patel. Without those tools, there is a chance that companies could expose themselves to data privacy issues, legal complications, and ethical issues.Also Read | Microsoft AI Tour highlights the transformative power of AI in IndiaThe IBM Global AI Adoption Index was conducted by Morning Consult for the tech company and found that 59 per cent of IT professionals at large organisations say they have actively deployed Ai while another 27 per cent are exploring the use of the technology. Also, six in 10 IT professionals enterprise companies say their company is actively implementing generative AI.74 per cent of the professionals at companies deploying or exploring AI say their organisations have accelerated their investment in or rollout of AI over the past 24 months. This is going to areas like R&D, reskilling, workforce development and building proprietary AI solutions.',
  author: 'Thomas Shelby',
  publishedDate: 'Updated 1 hour ago',
  imageUrl: 'https://i.postimg.cc/cLs2Nd92/IBM-global-AI-adoption-index-20240215.webp',
  tabId : 'latest'
},
{
  id: 17,
  title: 'Pensioners have to be handled with sympathy: Karnataka High Court',
  content: 'The Karnataka High Court has observed that a sympathetic view has to be taken of pensioners in case of delays. The observation was made by a division bench of Justices Krishna Dixit and G Basavaraja on February 7 while hearing a petition by a retired teacher regarding a salary increment.The retired teacher’s counsel argued that she should have been given the increment in question as it is available to all civil servants having studied up to SSLC in Kannada medium with Kannada as a subject, and that not giving it would be violative of the Constitution. The opposing State counsel argued that a previous application by the pensioner on the same issue was turned down by a tribunal. He added that the petition should be dismissed because of delay as the teacher retired in 2019.The bench observed, “Law does not come to the aid of sleepy and tardy, is true. However, it is notable that our Constitution does not prescribe any limitation period for tapping the Writ Jurisdiction, the doctrine of delay and laches being a judicial invention to turn down belated claims. This doctrine per se cannot defeat a legitimate right of a citizen, when no third-party rights are created, since it does not operate as a Thumb Rule. After all, the State pensioners have to be handled with soft gloves, with sympathy and smile.”The bench further said, “We cannot be oblivious to the fact that who is before the Writ Court is a poor lady who has served the State for about three decades on not much attractive salary; she did it in a very humble post namely Preprimary School Teacher; maybe she has shaped the fate of many children as ‘School Maatha’ in the Government School. She has retired from service and drawing not much… pension. The evening of life poses age-related difficulties which may be arguably mitigated with the aid of money. Denying any relief in its entirety would do great injustice to the pensioner.”The high court allowed the petition, restricting the increment to “three years anterior to Feb 2018” and ordering all benefits for the teacher to be re-fixed within three months, failing which the cost would be recovered from the erring official at an interest of 2 per cent per month.',
  author: 'Madhan Kumar',
  publishedDate: 'Updated 2 hour ago',
  imageUrl: 'https://i.postimg.cc/7hhhcvv2/Untitled-100.avif',
  tabId : 'latest'
},
{
  id: 18,
  title: 'SC decision on Electoral Bonds case: Will it revive the flagging RTI Act?',
  content: 'The historic decision by the Supreme Court (SC) declaring Electoral Bonds (EB) scheme as unconstitutional has given a big boost to the flagging Right to Information Act. The SC weighed in in its favour under Article 19 (1) (a) of the Constitution as against informational privacy in the EB case. The Solicitor General (SG) arguing before the Court had stated that citizens had no right to donor or recipient identities; the finance minister had opined that political retribution was also a cause for denial of information. Earlier, a Central Information Commissioner (CIC) put the RTI Act on its head by giving a decision that information disclosure on EBs was not in public interest. Such judgments, while reflecting poorly on their quality, also hinted at the opacity of the regime.',
  author: 'Abraham Thomas',
  publishedDate: 'Updated 2 hour ago',
  imageUrl: 'https://i.postimg.cc/BQGHbbGY/Supreme-Court-archives.avif',
  tabId : 'latest'
},
{
  id: 19,
  title: 'Nawaz Sharifs party calls for boycott of Uber’s local unit. Heres why',
  content: 'he party of Pakistan’s Prime Minister-in-waiting Shehbaz Sharif is calling for the boycott of a ride-hailing company for using a catchphrase popularized by the supporters of his rival — jailed former premier Imran Khan.A senior leader from the Pakistan Muslim League-Nawaz party said on X that Careem Pakistan’s use of the slogan “program gone bust” in a social media campaign was a “useless marketing tactic to stay relevant” and called on users to find other ride hailing services.Discover the thrill of cricket like never before, exclusively on HT. Explore now!The party accused the company, controlled by Uber Technologies Inc., of “pushing political agendas” in another X post. Careem Pakistan’s marketing campaign ran after the South Asian country’s most contentious elections, Dawn newspaper reported.The catchphrase was popularized by Khan’s supporters and it refers to the resounding success of the independent candidates backed by his Pakistan Tehreek-e-Insaf party who won the most seats in last week’s elections despite a government crackdown. The phrase was first coined by a PTI leader after a brawl with a PML-N politician on a television show last year, according to Dawn.Careem Pakistan said the post was to advertise the function to pre-book a ride. It denied that it had anything to do with politics.Careem Pakistan appears to have taken down the posts.The furore shows the impact of the polarizing election results on public discourse in Pakistan, particularly on social media. PML-N had come in second place in the elections but is on course to form government over the next few days or weeks as the party and other political groups band together to thwart Khan’s loyalists.',
  author: 'Deebak Kumar',
  publishedDate: 'Feb 14, 2024',
  imageUrl: 'https://i.postimg.cc/KcgcVDww/uber-1707996098536-1707996098736.png',
  tabId : 'world'
},
{
  id: 20,
  title: 'NYC Mayor Eric Adams files lawsuit against social media platforms for alleged youth mental health crisis',
  content: 'On Wednesday, New York City Mayor Eric Adamss administration took a bold step against social media companies, holding them accountable for contributing to a youth mental health crisis. The lawsuit filed hereby accuses TikTok, Instagram, Facebook (Meta), Snapchat, and YouTube of having a damaging influence on children. The City also created an action plan to address the ongoing crisis.Joining hands with hundreds of school districts and health organisations nationwide, the City seeks to push these tech giants to the edge, compelling them to change their behaviour. The lawsuit was filed in the California Superior Court since the companies are associated with the area.Discover the thrill of cricket like never before, exclusively on HT. Explore now!About the mental health crisis lawsuit against social media platforms filed by NYC Mayor Eric AdamsThe city reportedly spends over $100 million annually on youth mental health programs. Analysing the “addictive and overwhelming” use of the online world over the past decade, Mayor Adams advisory calls out the “non-stop stream of harmful content” that fuels the nationwide youth mental health crisis.Although the advisory acknowledges that New York City is “built on innovation and technology”, these social media platforms have endangered youth mental health as they promote addiction and encourage unsafe behaviour.Corporation Counsel Hinds-Radix also looked down upon these companies, choosing profit and neglecting childrens wellbeing. The advisory recommends to parents, educators, health care providers and other concerned personnel that preventing social media use until age 14 among children can be adopted as a safeguarded means of protection.Countering the allegations, A TikTok representative released a statement claiming that the company upholds “industry-leading safeguards” for teenagers that suggest age restrictions. A Google spokesperson chimed in by denying the allegations. The company claims to have a “healthier experience online” as a core identifier of their work. The representative also highlighted the built-in services for age-appropriate experiences while allowing parents access to robust controls.',
  author: 'Patel',
  publishedDate: 'Feb 14, 2024',
  imageUrl: 'https://i.postimg.cc/3wB0kFYn/NEW-YORK-HOMELESSNESS-0-1707995819351-1707995850462.avif',
  tabId : 'world'
},
{
  id: 21,
  title: 'Kansas City Chiefs Parade Shootout: Was Taylor Swift present? Is the team safe? All your questions answered',
  content: 'Three people were in custody in Kansas City, Missouri, on Thursday, facing questions about what led to a deadly mass shooting near the citys Super Bowl victory rally and who was behind it. At least one person was killed and 21 others wounded by gunfire on Wednesday outside the citys landmark Union Station, where thousands of fans had gathered with the Kansas City Chiefs to celebrate the teams NFL championship triumph over the San Francisco 49ers, authorities said.People flee after shots were fired near the Kansas City Chiefs Super Bowl LVIII victory parade on February 14, 2024, in Kansas City, Missouri. A shooting incident at a packed parade Wednesday to celebrate the Kansas City Chiefs Super Bowl victory killed one person and injured 21 others, police said. (Photo by ANDREW CABALLERO-REYNOLDS / AFP)(AFP)The bloodshed, which came at the end of the rally following a parade, turned the festive occasion into a scene of panic as throngs of attendees scrambled for cover at the sound of rapid-fire gunshots.Discover the thrill of cricket like never before, exclusively on HT. Explore now!Who died in the attack and who was hurt?Local radio station KKFI identified the slain victim as Lisa Lopez, one of its disc jockeys and host of the show "Taste of Tejano." Fifteen other victims suffered life-threatening wounds, Fire Department Chief Ross Grundyson said at a late-afternoon news conference. Eleven of those hurt by gunfire or the ensuing pandemonium were children as young as 6, officials said.Are the team members and staff safe?None of the football team, their coaches or other staff attending the rally was injured, the Chiefs said.',
  author: 'Rakesh Raj',
  publishedDate: 'Feb 13, 2024',
  imageUrl: 'https://i.postimg.cc/pL1X4cVN/AMFOOT-SUPERBOWL-CHIEFS-SHOOTING-3-1707993317743-1707993366920.avif',
  tabId : 'world'
},
{
  id: 22,
  title: 'UK slips into recession, another blow to Rishi Sunaks economic pledges',
  content: 'The UK slipped into a mild recession in the second half of 2023, showing prime minister Rishi Sunak has so far failed to meet his pledge to grow the economy.Gross domestic product fell 0.3% in the fourth quarter, more than the 0.1% drop economists forecast, Office for National Statistics figures released Thursday show. That followed an unrevised 0.1% decline in the previous three months, meeting economists’ technical definition of a recession, or two consecutive quarters of contraction.Discover the thrill of cricket like never before, exclusively on HT. Explore now!While the economy still grew 0.1% across the year as a whole, it was the slowest annual expansion the UK had seen since 2009, excluding the first year of the pandemic. The UK economy last posted a quarter of growth in the first three months of last year.UK bonds climbed for a second day, with 10-year yields coming off a two-month high close to 4.2% to fall below 4% for the first time in a week. Money markets boosted bets on the scope for monetary-policy easing this year, fully pricing three quarter-point cuts and a 10% chance of a fourth, while the first reduction is expected by August.The pound slipped as much as 0.2% against the dollar at $1.2542, set for a third day of losses.The recession, though widely anticipated, is further evidence that the Bank of England’s campaign to bring down inflation had taken its toll. The figures come at a particularly bad time for Sunak, with voters going to the polls in two parliamentary constituencies in England — the latest test of the opposition Labour Party’s strength ahead of a general election expected later this year.Sunak made growing the economy one of five key pledges after taking office in October 2022, along with cutting debt, halving inflation, reducing health services waiting lists and stopping boat migration across the English Channel. So far, he can only claim victory on his pledge to slow down price growth, something that the bank has far more influence over than the government.“The news that the UK slipped into technical recession in 2023 will be a blow for the prime minister on a day when he faces the prospect of losing two by-elections,” said Ruth Gregory, deputy chief UK economist at Capital Economics. “But this recession is as mild as they come and timely indicators suggest it is already nearing an end.',
  author: 'Khurshid Shamsuddin',
  publishedDate: 'Feb 13, 2024',
  imageUrl: 'https://i.postimg.cc/8kqYKRgy/rishi-sunak-1707992199398-1707992199735.avif',
  tabId : 'world'
},
{
  id: 23,
  title: 'New Study Reveals Impact of Climate Change on Global Agriculture',
  content: 'A groundbreaking study published today in the prestigious journal Nature reveals alarming trends in global agriculture as a result of climate change. The research, conducted over a decade by an international team of scientists, highlights the profound effects of rising temperatures, erratic weather patterns, and shifting precipitation on crop yields and food security worldwide.Explore the full findings and implications of this critical study, exclusively on our platform. Join now!According to the study, staple crops such as wheat, rice, and maize are experiencing significant declines in productivity across multiple regions. Extreme heatwaves, prolonged droughts, and increased frequency of pests and diseases are identified as primary contributors to yield losses, exacerbating existing challenges faced by farmers and communities.The implications of these findings are dire, with millions of livelihoods at risk and global food supply chains under increasing strain. The study underscores the urgent need for coordinated action to mitigate the impacts of climate change on agriculture, including investment in resilient farming practices, innovative technologies, and policy interventions.Join leading experts and policymakers in a virtual panel discussion on the future of agriculture in a changing climate. Reserve your spot now to be part of this crucial conversation.',
  author: 'Emily Thompson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/G3QBzQDR/OIP-1.jpg',
  tabId : 'world'
},
{
  id: 24,
  title: 'Global Summit Addresses Humanitarian Crisis in Conflict Zones',
  content: 'Leaders from around the world convened at the United Nations headquarters for a high-level summit aimed at addressing the escalating humanitarian crisis in conflict zones. The summit, which brought together heads of state, international organizations, and humanitarian agencies, focused on urgent action to alleviate suffering and protect civilians caught in the crossfire.Join our platform for exclusive coverage of the summit, featuring keynote speeches, panel discussions, and insights from frontline aid workers. Gain a deeper understanding of the challenges facing millions of people affected by conflict and the efforts underway to provide life-saving assistance and promote peace and stability.Highlighting the urgent need for collective action, Secretary-General of the United Nations emphasized the importance of upholding international humanitarian law and ensuring unimpeded access to aid for vulnerable populations. He called on world leaders to demonstrate political will and commitment to ending the cycle of violence and addressing the root causes of conflicts.Explore firsthand accounts from survivors of conflict, humanitarian workers, and policymakers working tirelessly to deliver aid and support to communities in crisis. Learn how you can contribute to global efforts to build resilience, promote reconciliation, and restore hope in the midst of adversity.',
  author: 'Sophie Ramirez',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/kGtpM4KF/OIP-2.jpg',
  tabId: 'world'
},
{
  id: 25,
  title: 'Major Diplomatic Breakthrough: Historic Peace Agreement Signed in the Middle East',
  content: 'In a historic development, leaders from across the Middle East have signed a landmark peace agreement aimed at ending decades of conflict and division in the region. The agreement, brokered by international mediators, represents a significant step towards lasting peace and stability.Join our platform for in-depth analysis and exclusive interviews with key negotiators, diplomats, and regional leaders involved in the peace process. Explore the implications of this historic agreement for the Middle East and the wider world, as well as the challenges and opportunities ahead for peacebuilding and reconciliation.Highlighting the importance of dialogue and cooperation, representatives from participating countries expressed optimism about the prospects for a new era of cooperation and prosperity in the region. The agreement includes provisions for mutual recognition, security cooperation, and economic development, laying the foundation for a comprehensive peace framework.Celebrate this historic moment with stories of hope and resilience from communities affected by conflict, as well as insights from peacebuilders and activists working towards a brighter future. Join the conversation and share your thoughts on the significance of this breakthrough for global peace and security.',
  author: 'Mohammed Al-Farsi',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/y6FGGJ6s/OIP-4.jpg',
  tabId: 'world'
},
{
  id: 26,
  title: 'Global Efforts Intensify to Combat Climate Change Amidst Rising Concerns',
  content: 'Amidst growing concerns over the escalating climate crisis, world leaders have ramped up efforts to combat climate change through ambitious policy measures and international cooperation. With the urgency of the situation becoming increasingly apparent, governments, businesses, and civil society organizations are mobilizing to address the root causes of climate change and mitigate its impacts.Join our platform for comprehensive coverage of global climate action initiatives, featuring interviews with climate experts, updates on key policy developments, and insights into innovative solutions for a sustainable future. Explore the latest climate science findings, highlighting the urgency of reducing greenhouse gas emissions and adapting to the changing climate.Realizing the interconnectedness of environmental, social, and economic challenges, leaders are embracing a holistic approach to climate action, integrating sustainability principles into policymaking and business practices. From renewable energy investments to nature-based solutions, explore the diverse strategies being deployed to transition to a low-carbon and resilient society.Take part in the global conversation on climate change, sharing your ideas and experiences for building a more sustainable and equitable world. Together, we can drive meaningful change and safeguard the planet for future generations.',
  author: 'Emma Johnson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/Hkf4H23K/download.jpg',
  tabId: 'world'
},
{
  id: 27,
  title: 'Excitement Builds as World Cup Qualifiers Enter Final Stage',
  content: 'With the World Cup qualifiers entering their final stage, excitement is reaching fever pitch among football fans worldwide. As teams vie for a coveted spot in the tournament, the stakes have never been higher.Join our platform for extensive coverage of the World Cup qualifiers, including match previews, live updates, and post-game analysis from renowned sports journalists and analysts. Get exclusive access to player interviews, team strategies, and expert predictions as the competition heats up.Experience the thrill of the beautiful game with highlights from key matches, showcasing the skills and determination of top footballing nations. From dramatic last-minute goals to nail-biting penalty shootouts, relive the unforgettable moments that define the quest for World Cup glory.Celebrate the passion and diversity of football culture with stories from fans around the world, sharing their experiences and traditions as they rally behind their favorite teams. Join the global football community in cheering on your nation and witnessing history in the making as the road to the World Cup unfolds.',
  author: 'Daniel Smith',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/XvsHwhbP/download-1.jpg',
  tabId: 'sports'
},
{
  id: 28,
  title: 'Tennis Superstars Set to Clash in Highly Anticipated Grand Slam Final',
  content: 'Tennis fans around the world are eagerly awaiting the showdown between two titans of the sport in the upcoming Grand Slam final. With both players in peak form and determined to claim victory, anticipation is at an all-time high.Join our platform for extensive coverage of the Grand Slam final, featuring expert analysis, player profiles, and live updates from the prestigious tournament. Experience the thrill of every serve, volley, and rally as the world\'s best tennis players compete for glory on the biggest stage.Witness history in the making as records are broken and champions are crowned in front of a global audience of millions. From breathtaking rallies to clutch performances under pressure, the final promises to deliver unforgettable moments that will be etched in tennis lore for years to come.Join the conversation with fellow tennis enthusiasts, sharing your predictions, reactions, and favorite memories from past Grand Slam finals. Whether you\'re a die-hard fan or a casual observer, don\'t miss out on the excitement of this epic clash between tennis superstars.',
  author: 'Sophie Martinez',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/054ggzh4/OIP-5.jpg',
  tabId: 'sports',
},
{
  id: 29,
  title: 'NBA Finals: Teams Gear Up for Epic Showdown in Decisive Game 7',
  content: 'The NBA Finals are reaching a thrilling climax as two powerhouse teams prepare to face off in a decisive Game 7. With the championship on the line, anticipation is mounting among basketball fans worldwide.Join our platform for extensive coverage of the NBA Finals, including expert analysis, player interviews, and live updates from the electrifying series. Experience the intensity of every dribble, shot, and block as the league\'s top athletes leave it all on the court in pursuit of basketball immortality.Witness history in the making as iconic moments unfold and legends are born in front of a global audience of millions. From clutch three-pointers to game-winning dunks, Game 7 promises to deliver edge-of-your-seat action that will be remembered for generations.Join the conversation with fellow basketball aficionados, sharing your predictions, reactions, and favorite highlights from the NBA Finals. Whether you bleed team colors or simply love the game, don\'t miss out on the excitement of this epic showdown between basketball giants.',
  author: 'Michael Johnson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/05YtnbPm/OIP-6.jpg',
  tabId: 'sports'
},
{
  id: 30,
  title: 'Top Clubs Eyeing Major Signings Ahead of Transfer Window',
  content: 'With the transfer window looming, speculation is rife as top football clubs gear up for potential blockbuster signings. From established stars to rising talents, the rumor mill is abuzz with reports of big-money moves and player swaps.Join our platform for comprehensive coverage of the latest transfer rumors, featuring expert analysis, insider reports, and exclusive interviews with agents and club officials. Stay ahead of the curve with real-time updates on potential transfers, including contract negotiations, fee negotiations, and medical examinations.Experience the drama and intrigue of the transfer market as clubs jostle for position and players weigh their options for the next chapter of their careers. Whether it\'s a marquee signing to bolster title ambitions or a strategic acquisition to address squad depth, every transfer story adds to the excitement of the beautiful game.Join the discussion with fellow football enthusiasts, sharing your thoughts on potential transfers, dream signings, and the impact on club dynamics and league competitiveness. Don\'t miss out on the excitement of the transfer window as clubs wheel and deal to strengthen their squads for the challenges ahead.',
  author: 'Oliver Smith',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/g2X8MT85/OIP-7.jpg',
  tabId: 'sports'
},
{
  id: 31,
  title: 'Ravindra Jadeja miserable after leaving Sarfaraz Khan for dead on Test debut',
  content: 'Veteran Indian all-rounder Ravindra Jadeja has opened up about the unfortunate mixup between him and Sarfaraz Khan on Day 1 of the 3rd Test against England. Leading Indias batting charge on Thursday, Jadeja teamed up with debutant Sarfaraz after Indian skipper Rohit Sharma revived the innings of the hosts with a record-setting century. While Jadeja and Rohit emerged as centurions in Rajkot, young Sarfaraz won several hearts with his breathtaking knock against Ben Stokes and Co. in the crucial encounter.Sarfaraz arrived at the crease when Jadeja was batting on 84 off 153 balls. By the time a slow and steady Jadeja reached 99, Sarfaraz had already notched up his first-ever half-century for Team India in the third session. Keen on helping Jadeja reach the triple-digit mark before the end of the days play, Sarfaraz was sold down the river by the Indian southpaw in the 81st over.Discover the thrill of cricket like never before, exclusively on HT. Explore now!Ravindra Jadeja miserable after leaving Sarfaraz Khan for deadJadeja turned down the quick run when Sarfaraz responded for a single, leaving mid-on fielder Mark Wood to fire a direct hit, which ended the debutants entertaining knock. Taking to Instagram after taking India to a respectable total on Day 1, Jadeja sympathised with Sarfaraz. The veteran all-rounder also took full responsibility for the run out. “Feeling bad for SarfarazKhan97 it was my wrong call. Well played,” Jadeja posted on Instagram Stories.',
  author: 'Madhan Kumar',
  publishedDate: 'Feb 13, 2024',
  imageUrl: 'https://i.postimg.cc/d3cJYDxr/ANI-20240215391-0-1708006763826-1708006777709.avif',
  tabId : 'sports'
},
{
  id: 32,
  title: 'Olympic Games: Athletes Prepare for Tokyo 2024 with High Hopes and Determination',
  content: 'As the world eagerly anticipates the Tokyo 2024 Olympic Games, athletes from around the globe are gearing up for the opportunity to compete on the biggest stage in sports. With dreams of glory and national pride at stake, preparations are in full swing.Join our platform for exclusive coverage of the road to Tokyo 2024, featuring interviews with Olympic hopefuls, insights from coaches and trainers, and behind-the-scenes access to training camps and qualifiers. Get to know the athletes who will represent their countries and witness their journey as they strive for excellence.Experience the excitement and drama of the Olympic Games as athletes compete across a wide range of sports, from track and field to swimming, gymnastics, and beyond. Follow the medal race closely and cheer for your favorite athletes as they vie for gold, silver, and bronze on the world stage.Join the global community of sports fans in celebrating the Olympic spirit and supporting athletes from all corners of the world. Whether it\'s a record-breaking performance, a heartwarming underdog story, or a display of sportsmanship and camaraderie, the Tokyo 2024 Olympics promise to inspire and unite us all.',
  author: 'Jessica Lee',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/j21Q20yH/OIP-9.jpg',
  tabId: 'sports'
},
{
  id: 33,
  title: 'Kabaddi World Cup: Teams Prepare for Intense Battles in the Group Stage',
  content: 'Kabaddi enthusiasts around the globe are eagerly awaiting the start of the Kabaddi World Cup, where teams from various countries will compete in thrilling matches of skill and strategy. With the stage set for intense battles in the group stage, excitement is at an all-time high.Join our platform for comprehensive coverage of the Kabaddi World Cup group stage, featuring match previews, live updates, and post-match analysis from Kabaddi experts and former players. Gain insights into team dynamics, player performances, and the quest for glory as nations vie for supremacy in the sport.Experience the adrenaline-pumping action of Kabaddi as athletes showcase their agility, strength, and tactical prowess on the mat. From lightning-fast raids to strategic defensive maneuvers, every match promises moments of excitement and anticipation.Join the global Kabaddi community in celebrating the spirit of the sport and supporting your favorite teams on their journey to Kabaddi World Cup glory. Whether youre a seasoned fan or new to the sport, dont miss out on the thrills and drama of this prestigious tournament.',
  author: 'Priya Singh',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/BvJDqQdW/OIP-10.jpg',
  tabId: 'sports'
},
{
  id: 34,
  title: 'Cricket World Cup: Teams Gear Up for Intense Battle in Group Stage Matches',
  content: 'The excitement is palpable as cricket teams from around the world gear up for the group stage matches of the Cricket World Cup. With fierce competition and high stakes, fans are eagerly anticipating thrilling encounters on the field.Join our platform for comprehensive coverage of the Cricket World Cup group stage, featuring match previews, live score updates, and post-match analysis from cricket experts and former players. Stay tuned for in-depth insights into team strategies, player performances, and key moments that shape the course of the tournament.Experience the drama and excitement of cricket\'s premier event as teams battle it out for supremacy on the global stage. From blistering centuries to game-changing wickets, every match promises moments of brilliance and heart-stopping action.Join the conversation with cricket enthusiasts from around the world, sharing your predictions, reactions, and favorite highlights from the Cricket World Cup. Whether you\'re supporting your home team or admiring the skill of players from rival nations, don\'t miss out on the excitement of this epic showdown.',
  author: 'Adam Khan',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/GtXgj5Gt/OIP-8.jpg',
  tabId: 'sports'
},
{
  id: 35,
  title: 'New Study Reveals Impact of Online Learning on Student Performance',
  content: 'A groundbreaking study published in the Journal of Educational Psychology sheds light on the impact of online learning on student performance...',
  author: 'Emma Thompson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/Kzks5NQD/download-2.jpg',
  tabId: 'education'
},
{
  id: 36,
  title: 'Researchers Develop Promising Vaccine Candidate for Malaria',
  content: 'In a significant breakthrough, researchers have developed a promising vaccine candidate for malaria...',
  author: 'David Miller',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/Bb3c1cz6/OIP-11.jpg',
  tabId: 'education'
},
{
  id: 37,
  title: 'New AI Algorithm Achieves Breakthrough in Natural Language Processing',
  content: 'Researchers have developed a groundbreaking AI algorithm that has achieved a major breakthrough in natural language processing...',
  author: 'Sophie Williams',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/xjscm3h4/OIP-12.jpg',
  tabId: 'education'
},
{
  id: 38,
  title: 'Tech Giants Report Record Profits Amidst Market Turbulence',
  content: 'Despite market turbulence, tech giants have reported record profits for the latest fiscal quarter, surpassing analysts\' expectations...',
  author: 'Michael Johnson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/Hktxp0wz/OIP-13.jpg',
  tabId: 'education'
},
{
  id: 39,
  title: 'New Educational App Revolutionizes Learning Experience for Students',
  content: 'A new educational app is revolutionizing the learning experience for students by providing interactive lessons, quizzes, and personalized study plans tailored to individual learning styles...',
  author: 'Sarah Johnson',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/Nfj3S1Nm/OIP-14.jpg',
  tabId: 'education'
},
{
  id: 40,
  title: 'Study Abroad Programs See Surge in Applications Despite Pandemic Challenges',
  content: 'Despite the challenges posed by the pandemic, study abroad programs are experiencing a surge in applications as students seek international learning opportunities and cultural experiences...',
  author: 'David Smith',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/tCg3LzL3/OIP-15.jpg',
  tabId: 'education'
},
{
  id: 41,
  title: 'Universities Collaborate on Research Initiative to Address Climate Change',
  content: 'Leading universities have announced a collaborative research initiative aimed at addressing climate change through interdisciplinary studies and innovative solutions...',
  author: 'Emma Williams',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/nV5HKFYv/OIP-16.jpg',
  tabId: 'education'
},
{
  id: 42,
  title: 'New Study Analyzes Impact of Arts Education on Cognitive Development',
  content: 'A new study conducted by researchers at renowned universities analyzes the impact of arts education on cognitive development and academic performance in students...',
  author: 'Michael Brown',
  publishedDate: 'Feb 15, 2024',
  imageUrl: 'https://i.postimg.cc/GmZB2P9s/OIP-17.jpg',
  tabId: 'education'
},
{
  id: 43,
  title: 'Day 3 protest: Farmers to block trains today, hold round 3 talks with Centre',
  content: 'Farmers Delhi Chalo protest: 3 Union ministers will meet farmers leaders in Chandigarh for the third round of talks amid stand-off at Haryana, Punjab borders.Several major farmers’ unions have extended their support to the protesting farmer unions at Shambhu border and Khanauri border in Punjab, with the Bharatiya Kisan Union (Ugrahan) and BKU Dakaunda (Dhaner faction) announcing a ‘rail roko’ (stop trains) in the state on Thursday between 12 noon and 4 pm on Thursday, February 15. The Samyukt Kisan Morcha, an umbrella body of 37 farm unions, have also supported the ongoing protests. The protesters are demanding a minimum support price or MSP for their crops.A protester uses water to disperse tear gas, as farmers march towards New Delhi to press for better crop prices promised to them in 2021, at Shambhu, a border crossing between Punjab and Haryana. (REUTERS)A protester uses water to disperse tear gas, as farmers march towards New Delhi to press for better crop prices promised to them in 2021, at Shambhu, a border crossing between Punjab and Haryana. (REUTERS)These unions had played key roles in the protests on Delhi’s fringes in 2021 and have joined the current protests citing the “condemnable use of violence” against farmers. BKU (Ugrahan) general secretary Sukhdev Singh Kokri Kalan has slammed the police action.Discover the thrill of cricket like never before, exclusively on HT. Explore now! “We stand with them in solidarity. To prove it, our supporters will hold rail roko (stop trains) at as many places as we can,” he announced. The organisation will block train tracks in Punjab between 12pm and 4pm on Thursday, he said, a day before the larger nationwide strike planned for February 16. Follow Live Updates on farmers protest',
  author: 'Deebak Kumar',
  publishedDate: '2024-02-15',
  imageUrl: 'https://i.postimg.cc/Bb7xRrS1/INDIA-FARMERS-PROTESTS-28-1707958565170-1707958594541.avif',
  tabId : 'latest'
},
{
  id: 44,
  title: 'Maharashtra Speaker rejects plea to disqualify MLAs of Ajit Pawar faction',
  content: `Maharashtra Assembly Speaker Rahul Narwekar on Thursday dismissed the petitions to disqualify MLAs belonging to Ajit Pawa'sr faction, ruling that his faction substantially outnumbered the Sharad Pawar faction in the state legislature.NCP founder-leader Sharad Pawar and nephew Ajit Pawar (left).NCP founder-leader Sharad Pawar and nephew Ajit Pawar (left).“I hold that the Ajit Pawar faction enjoys an overwhelming majority within the NCP,” Narwekar declared while delivering a verdict on the disqualification petitions filed by the two factions within the Nationalist Congress Party (NCP) against each other.`,
  author: 'Patel',
  publishedDate: '2024-02-12',
  imageUrl: 'https://i.postimg.cc/brYxKPKq/ajit-pawar-sharad-pawar-ncp-mla-1707996459277-1707996459456.jpg',
  tabId : 'latest'
},
 ];

 
const App = () => (
    <div className='app-container'>
      <Header />
      <div className='app-body'>
        <Routes>
            <Route path="/" element={ <Home articles={articles}/> } />
            <Route path="/news/:id" element={<NewsDetails articles={articles} />} />
            <Route path='/latest' element={<TabNews articles={articles} category="latest" />} />
            <Route path='/world' element={<TabNews articles={articles} category="world"/>} />
            <Route path='/india' element={<TabNews articles={articles} category="india"/>}/>
            <Route path='/sports' element={<TabNews articles={articles} category="sports"/>}/>
            <Route path='/education' element={<TabNews articles={articles} category="education"/>} />
            <Route  path='/searchnews' element={<SearchPage articles={articles}/>} />
            <Route path='/epaper' element={<EPaper />}/>
            <Route path='/not-found' element={<NotFound />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
      </div>
    </div>
)

export default App;
