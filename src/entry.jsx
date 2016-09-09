import React from 'react';
import ReactDOM from 'react-dom';
import {orange500,orange700} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Theme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    primary2Color: orange700,
  }
});

const NoFitTile = (props) => (
  <GridTile {...props} style={{textAlign:"center"}}>
    <span><img src={props.src} style={{width:"auto", height:"100%"}}/></span>
  </GridTile>
);

const MetaLink = (props) => (
  <a href={props.prefix + ":" + props.href}>{props.href}</a>
);

const EmailLink = (props) => (
  <MetaLink prefix="mailto" href={props.href} />
)

const TelLink = (props) => (
  <MetaLink prefix="tel" href={props.href} />
)

const Facutly = (props) => (
  <Card>
  <CardHeader
  title={props.name}
  subtitle={props.postion}
  avatar={`resources/${props.name.split(' ').map( (x) => (x[0].toLowerCase()+x.slice(1))).join('-')}-avatar.jpg`}
  style={{paddingBottom:0}}
  />
  <CardText style={{paddingTop:0}}>
      <p>
        {props.children}
      </p>
      <p>
        Email: <EmailLink href={props.email} />
      </p>
      <p>
        Phone: <TelLink href={props.tel} />
      </p>
      <p>
        Office address: {props.address}
      </p>
  </CardText>
</Card>
)

const MainIntro = () => (
  <div>
    <Card>
      <CardMedia overlay={
        <CardTitle title="ChungYing College"
        subtitle="Serving Society, Devoting Kindness, Considering Others, Carrying Virtues." />
      }>
        <img src="resources/mainlogo.png" />
      </CardMedia>
      <CardText>
        <p>
          Xi'an Jiaotong University ChungYing College was founded in July 2008, which acquired great support from renowned philanthropist, chairman of Tang's Industrial Group and Cyrus Tang Foundation. Thus we named our college after Mr.Tang, and the executive director Mrs.Xu Xiaochun was, reasonably, take the position of the college dean. ChungYing College, located east on Kangqiao Centre in Xingqing Campus, is made up of 4 8-floor-high apartments which connect each other to form a fracture of chinese character Hui(回). Inside our college we have public facilities available to all of students like Reading Room, Information Room, Communication Room, Rehearsal Room, Gym etc.
        </p>
        <p>
          Chungying College has constantly strived to cultivate students into "alents with modesty and responsibility" by incorporating unique cultural elements and teamwork activities. It primarily seeks to promote campus culture, to develop the students ability of self—management, to establish an affectionate and caring environment, and to perfect students' personality.
        </p>
        <p>
          At present, our college currently owns around 3,050 students in total, whose majors involve over 14 containing Automation Science and Technology, Nuclear Engineering and Technology, Chemistry Engineering and Technology, Process Units and Control Engineering, Environment Engineering, Biomedical Engineering, Biotechnology Engineering, National Base Class of Life Science and Technology,  CPA,  Industrial Engineering, ACCA, Software Engineering and Tsien Hsue-shen Experimental Class etc.
        </p>
        <p>
          Our college employ 15 full-time teachers, and select a team of directors made up of visiting professors, academic tutors and general knowledge tutors, together with whom fellow group consisted of higher grades students.
        </p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title="Features and Ideas" subtitle="About Us"/>
      <CardText>
        <GridList>
          <NoFitTile src="resources/logo.png" />
          <NoFitTile src="resources/alternative-logo.png" />
        </GridList>
        <p>
          The logo of Chunying College is composed of four basic shapes, with concise graphics and ease of application. The basic form is a prototype of books after abstracting, which symbolizes the learning atmosphere in our College. The aggregated graphics are also a symbol of solidarity with students from different majors, to live together as a big family. Meanwhile, like a front sight, the logo shows a sense of purpose and a sense of power, motivating everyone of our college to work hard for their own dreams. As for the color, red, as the emotional thoughts in liberal arts, is full of vitality and passion.
        </p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title="Fracture"/>
      <CardMedia>
        <img src="resources/fracture.png" />
      </CardMedia>
      <CardText />
    </Card>
    <Card>
      <CardTitle title="About Mr.Tang"/>
      <CardText>
        <GridList>
          <NoFitTile src="resources/mrtang1.jpg" />
          <NoFitTile src="resources/mrtang2.jpg" />
        </GridList>
        <p>
          Mr. Tang Zhongying was born in 1930 in Shengze Town, Wujiang City, Jiangsu Province. He was removed with his father in his childhood to Chongqing, and then to Hong Kong in order to avoid the war of Japanese aggression against China. In 1950, Mr. Tang went to the United States to study from Hong Kong. After that, starting from scratch, he got involved in a variety of industries. From 1960, he began to build factories. The first sole proprietorship steel service center - International Materials Corporation was created in 1964. With more than 30 enterprises in the United States to 1980, Tang Industrial Group began to take shape. In 1982, the acquisition of Mike Ross steel plant made the Tang Industrial Group among the ranks of the private sector with annual sales of more than $ 1 billion. Mr. Tang is also known as a "steel magnate". In 1999, Tang Industrial Group was ranked as the 157th place of the nation's private companies by the U.S. Forbes magazine. Although burdened with business, Mr. Tang did not forget to explore ways of contributing to the community. In his view, knowledge, health and social responsibility are three points to promote social progress. Therefore, since 1995, Mr. Tang has created three Foundations in the United States: Tang Zhongying Foundation (China), Tang Zhongying Foundation (USA) and the Tang Chinese medicine Research Foundation. Tang Foundation (China) and the Tang Foundation (USA) commit to the funding of three major areas of education, health and community development activities; Tang Chinese Medicine Research Foundation aims at integration of Chinese and Western technology, which is applied to research and development of modern Chinese medicine, in order Chinese medicine, a gem of the Chinese nation, to be promoted to the world for the benefit of society.  Mr Tang hopes further attention by the whole society on the above-mentioned fields through a series of funded activities to stimulate the relevant agencies and individuals involved making concerted efforts to improve the quality of life of our people; At the same time, the three foundations become a bridge for promoting Sino-US civil communications, whereby as a return to the country which raised him - China, and to the country which honored him - the United States.
        </p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title="Faculties Introduction" />

      <Card>
        <CardHeader title="Cyrus Tang" avatar="resources/cyrus-tang-avatar.jpg" style={{paddingBottom:0}}/>
        <CardText style={{paddingTop:0}}>
          <p>
            Cyrus Tang was born in Shenze, Wujiang in 1930. After years of painstaking efforts, Tang Industries, Inc. eventually ranked 157 in the list of American private enterprises according to Forbes Magazine, and Mr. Tang received the honorific title as Steel Magnate. With his success in career, and for the purpose of dedicating himself to society commitment, Mr. Tang has successively established Cyrus Tang CompassionateHeart Scholarship and Cyrus Tang Scholarship for Personal Development and Community Service in several secondary schools and universities, intending to provide the society by education with the talents of high morality and abundant knowledge. In 2008, Mr. Tang sponsored Xi'an JiaoTong University for the establishment of Chungying college, which has contributed a lot for the education in the university.
          </p>
        </CardText>
      </Card>

      <Card>
        <CardHeader title="Xu Xiaochun" subtitle="Executive Director of the Board, Cyrus Tang Foundation" avatar="resources/xu-xiaochun-avatar.jpg" style={{paddingBottom:0}} />
        <CardText style={{paddingTop:0}}>
          <p>
            Xu Xiaochun, Executive Director of the Board, Cyrus Tang Foundation. Since July 2008, Ms Xu has undertaken the post of Dean of Chungying college and, under the guidance of Cyrus Tang Foundation's objectives, instructed the overall construction of the college.
          </p>
        </CardText>
      </Card>

      <Card>
        <CardHeader title="Yan Wei" subtitle="Chungying College Assembly of Fellows Vice-chairman" avatar="resources/yan-wei-avatar.jpg" style={{paddingBottom:0}}/>
        <CardText style={{paddingTop:0}}>
          <p>
            Professor, Deputy Party Secretary of the School of Energy and Power Engineering.
          </p>
        </CardText>
      </Card>

      <Facutly name="Xu Hui" postion="Deputy Director of the College" email="xuhui678@mail.xjtu.edu.cn" tel="029-82665272" address="east-21 room 115">
        Responsibilities: assist with the daily work of the College, in charge of the College propaganda, general education, foreign exchange, learning activities, Enrollment
      </Facutly>

      <Facutly name="Liu Hong" postion="Director of Executive Office" email="pinkl@mail.xjtu.edu.cn" tel="029-82665274" address="east 21-116">
        Job description: manage class of 2009 of life science school, class of 2009 of management school, director of executive office of the college, construction of environment, document contact and official seal.
      </Facutly>

      <Facutly name="Yue Tian" postion="Assistant Director of the College" email="candykiss@mail.xjtu.edu.cn" tel="029-82665275" address="east 21-116">
        Job description: manage class of 2007 and 2008 of life science school, class 2007 and 2008 of management school, external communication, student employment guidance.
      </Facutly>

      <Facutly name="Gao Qiong" postion="Secretary of General Party Branch" email="gaoqiong@mail.xjtu.edu.cn" tel="029-82665277" address="east 21-123">
        Job description: manage class of 2010 of Energy and Power School, class of 2010 of Management School. In charge of General Party Branch routine work.
      </Facutly>

      <Facutly name="Zhao Ying" postion="Standing Supervisor" email="zhaoying@xjtu.edu.cn" tel="029-82665274" address="east 21-116">
        Job description: manage class of 2010 of life science school, class of 2010 of software engineering school, in charge of psychological service, construction of academic discipline, assistant academic research.
      </Facutly>

      <Facutly name="Lu Yun" postion="Deputy Director of the Office, Director of Student Affairs" email="luyun@mail.xjtu.edu.cn" tel="029-82665280" address="east 21-123">
        Job description: manage class of 2007 of Energy and Power Engineering School, class of 2007 of Software Engineering School, financial management, assets management, students rewards and punishments affairs.
      </Facutly>

      <Facutly name="Duan Hengqiang" postion="Standing supervisor" email="duanhengqiang@mail.xjtu.edu.cn" tel="029-82665280" address="east 21-123">
        Job description: manage class of 2009 of Energy and Power Engineering School, class of 2009 of Software Engineering School, student financial assistance, documents classification and arrangement, intangible environment construction, student recruitment publicity.
      </Facutly>

      <Facutly name="Zhang Rui" postion="Director of Students Employment" email="zrxajt@mail.xjtu.edu.cn" tel="029-82665283" address="east 21-118">
        Job description: manage class of 2010 of Automation Specialty of electronic and information engineering school, class of 2010 of Tsien Hsue-shen Experimental Class, student association guidance, communication with Cyrus Tang Foundation, students employment guidance
      </Facutly>

      <Facutly name="Liang Hui" postion="Deputy Secretary of Group Working Committee" email="lianghui@mail.xjtu.edu.cn" tel="029-82665283" address="east 21-108">
        Job description: manage class of 2011,12 of Automation Specialty of electronic and information engineering school, class of 2011,12 of Tsien Hsue-shen Experimental Class, college communist youth league affairs, college group working committee and students unions guidance
      </Facutly>

      <Facutly name="Zhang Yan" postion="Deputy Secretary of Group Working Committee" email="loyalyan@mail.xjtu.edu.cn" tel="029-82665283" address="east 21-108">
        Job description: manage class of 2014 of Automation, class of 2014 of Tsien Hsue-shen Experimental Class, assist secretary with college communist youth league affairs and college group working committee, college publicity
      </Facutly>

    </Card>
  </div>
);

const ShiningIntro = () => (
  <div>
    <Card>
      <CardMedia overlay={
        <CardTitle title="Shining Chungying"
        subtitle="Student Activities" />
      }>
        <img src="resources/shining-logo.jpg" />
      </CardMedia>
    </Card>
    <Card>
      <CardTitle title="Study Tour activity of ChunSongXiaXing"/>
      <CardText>
        <GridList cols={3}>
          <NoFitTile src="resources/csxxResources/1.jpg" />
          <NoFitTile src="resources/csxxResources/2.jpg" />
          <NoFitTile src="resources/csxxResources/3.jpg" />
          <NoFitTile src="resources/csxxResources/4.jpg" />
          <NoFitTile src="resources/csxxResources/5.jpg" />
          <NoFitTile src="resources/csxxResources/6.jpg" />
          <NoFitTile src="resources/csxxResources/7.jpg" />
          <NoFitTile src="resources/csxxResources/8.jpg" />
          <NoFitTile src="resources/csxxResources/9.jpg" />
        </GridList>
        <p>
          'ChunSongXiaXing'----love's on the road, know-bound trip "Study Tour" activity of "ChunSongXiaXing" is an excellent activity of the Four Seasons Special Activities in our college. Since its first held last year, the activity has played a positive role in enhancing students' cognitive and practical abilities, broadening their horizons, and enhancing their interpersonal skills, thus it enjoys a high level of popularity and praise. In order to help students to better understand the society, adapt to it and serve it, to improve their qualities, to enhance their sense of team, our college will hold the 2011 "ChunSongXiaXing"—"Love's on the road, know-bound trip" activity during this summer vocation. Activity Object: all of the students in our college. Cross-grade, cross-major and cross-college teams are allowable, and the teams can also be the associations of community or friends.
        </p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title="Fellow Group"/>
      <CardText>
        <GridList cols={2}>
          <NoFitTile src="resources/fellowGroupResources/1.jpg" />
          <NoFitTile src="resources/fellowGroupResources/2.jpg" />
          <NoFitTile src="resources/fellowGroupResources/3.jpg" />
          <NoFitTile src="resources/fellowGroupResources/4.jpg" />
        </GridList>
        <p>
          Fellow gourd was consisted by a number of selfless and kind students from relatively higher grades who volunteer to sacrifice their leisure time to devote themselves into figuring out the problems of the freshmen about study, daily life or school affairs, which could help them to get adapted to the college life and promote friendship with the others.
        </p>
        <p>
          Thanks to their contribution, the freshmen who join in the university every year soon became familiar with the new life on campus. Besides, through the time they spend together, they gradually set up closely relationships with each other and thus extend their social circle.
        </p>
      </CardText>
    </Card>
    <Card>
      <CardTitle title="Yingzai Lover"/>
      <CardText>
        <GridList cols={3}>
          <NoFitTile src="resources/YZLoverResources/0.png" />
          <NoFitTile src="resources/YZLoverResources/1.png" />
          <NoFitTile src="resources/YZLoverResources/2.png" />
          <NoFitTile src="resources/YZLoverResources/3.png" />
          <NoFitTile src="resources/YZLoverResources/4.png" />
          <NoFitTile src="resources/YZLoverResources/5.png" />
          <NoFitTile src="resources/YZLoverResources/6.jpg" />
          <NoFitTile src="resources/YZLoverResources/7.jpg" />
          <NoFitTile src="resources/YZLoverResources/8.png" />
          <NoFitTile src="resources/YZLoverResources/9.jpg" />
          <NoFitTile src="resources/YZLoverResources/10.jpg" />
        </GridList>
        <p>
          In Oct. 2010, the 6th Cyrus Tang Scholarship Communication Annual Meeting concluded successfully, the students of college raise a dream through that meeting, which is to found a commonweal association of our own. Thus, with the positive propose of students and the assistance of college teachers, on Dec. 8 2010, a significant date, Xi’an Jiaotong University YZ Lovers Association came true publicly.
        </p>
        <p>
          YZ Lovers Association adhere the motto of the college "Serve Society, Devote Kindness, Consider Others, Carry Virtues.” to step on the route of fulfilling commonweal and serving society since it’s founded. The establishment lit on the torch of love inside the heart of our college students, and soon became increasingly flourishing.
        </p>
      </CardText>
    </Card>
  </div>
)

const App = () => (
  <MuiThemeProvider muiTheme={Theme}>
    <div>
      <AppBar title="ChungYing College" style={{position:"fixed"}} />
      <MainIntro />
      <ShiningIntro />
    </div>
  </MuiThemeProvider>
);

let app = document.createElement('div');
ReactDOM.render(<App />, app);
document.body.appendChild(app);
