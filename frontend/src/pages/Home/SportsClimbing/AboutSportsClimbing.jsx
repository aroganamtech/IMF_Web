import React from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  Divider,
  Fade,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const sections = [
  {
    title: 'What is Sport Climbing',
    content:
      "Climbing is a primary human movement. As children, we crawl, learn to climb and then learn to walk. Sport climbing is just an embellishment of that reflex we've all exercised on-ladders, stairs or trees. Sport climbing is an offshoot of natural rock climbing and is more accessible than traditional rock climbing, both in terms of location and cost. While its genesis lay in Mountaineering, it has evolved into a unique sport accessible to millions, who practise it both indoors and outdoors. Sport climbing involves high-intensity climbing on relatively short routes. Its distinguishing characteristics include preplaced bolts and an emphasis on the physical aspect of the climb rather than the destination or summit. Sport routes can be found indoors or out, on nearby, accessible rock crags or on artificial walls at a gym or a competition arena. India houses some of the world's most renowned climbing destinations like Badami, Hampi, Dhauj, Chhatru,the Sahyadris and Rishikesh. The sheer volume of unexplored areas, however, catalyzes the possibility of a massive expansion in the scene that currently sits on the verge of becoming a very stable tourist economy. Also, the symbiosis between outdoor and indoor climbing has facilitated more frequent and rewarding competitive circuits. In short, there's a lot to watch, but even more to watch out for!",
  },
  {
    title: 'Sport Climbing as a Competitive Sport',
    content:
      'Sport climbing on an artificial wall surface was officially confirmed as an additional sport for the Tokyo 2020 Olympic Games by the IOC Session in Rio de Janeiro in August 2016 and it has been included as a medal sport in the 2018 Youth Olympic Games in Buenos Aires. The International Federation of Sport Climbing (IFSC) is the international governing body for the sport of competitive climbing. It was founded in Frankfurt on 27 January 2007 by 48 member federations. The IFSC is recognized by the IOC, is member of ARISF, Sport Accord and IWGA.',
  },
  {
    title: 'International Competitive Disciplines',
    content: [
      `a) Lead: Climbs ('Routes') are climbed with the competitor clipping into protection points as they climb (on "Lead"). Progression along the line of the route determines a competitor's ranking. Lead climbing is a height competition within a specified time frame in which climbers attach a safety rope and climb a fixed course on a wall exceeding 12 meters. It focuses on the difficulty of a route.`,

      `b) Bouldering: Short climbs ('Boulders') are attempted without ropes but with landing mats for protection. Climbers climb fixed routes on a wall of 5 meters or less, and are ranked by the number of routes they have completed in the designated time frame. It focuses on short 'problem' sequences of 5 to 6 moves.`,

      `c) Speed: Climbs are attempted with an in-situ rope on ("Top-Rope"). Speed climbers climb a fixed route on a 15-meter wall with holds. The time to complete the route determines a competitor's ranking. It is a sprint race in which split-second timing is required.`,

      `d) Team Speed: This new discipline has been introduced in the Olympic format. It is a relay competition with teams of three athletes of the same sex. The race is held on the speed climbing wall, split into four lanes, two for each team.`,

      `Climbing is a challenging, thoroughly enjoyable and highly addictive sport that nurtures great physical (strength, balance, coordination) and mental (confidence, trust in others, commitment) attributes whilst remaining non-discriminatory regarding gender or age. It places an emphasis on gymnastic-like ability, strength, and endurance. The athletes have to use his/her two hands and two legs but not all four at one time. At least one out of four points of his body should be free leaving him to push up, hence it is based and known as 3 point climbing.`,

      `In addition to the athletes who participate in the competitions, several other categories of officials/athletes are also actively involved in the conduct of sport climbing activity:`,

      `1. Belayers: Are trained to handle safety rope of the climbers and arrest the fall of athletes in case they slip, to prevent injuries and ensure safe descent.`,

      `2. Route Setters: They plan and co-ordinate all matters of route setting and route maintenance, including the design of each route or boulder; the installation of holds, protection points and other equipment; repair and cleaning of routes and boulders. They are responsible for checking the technical standard and safety of each route or boulder.`,

      `3. Judges: They judge the performance of the competitors on routes and boulders respectively. National Judges shall be persons holding an international or a national license and are expected to be fully informed of the technical rules and regulations governing competitions approved by the IFSC.`
    ],
  },
  {
    title: 'Infrastructure Requirement',
    content: [
      `The infrastructure required for the practice of the sport is a designed climbing wall fitted with holds to enable climbing on the wall. It can be done on any existing wall or & a separate structure safely with the aid of the rope belay. However, on most modern walls, the material most often used is a thick multiplex board with holes drilled into it. The face of the multiplex board climbing surface is covered with textured products including concrete and paint or polyurethane loaded with sand. In addition to the textured surface and hand holds, the wall may contain surface structures such as indentions (in cuts) and protrusions (bulges), or take the form of an overhang, under hang or crack. Some grips are formed to mimic the conditions of outdoor rock, including some that are oversized and can have other grips bolted onto them.`,

      `However, for a competition the wall needs to be standardized as per IFSC parameters.`,

      `Lead: The climbing surface shall permit routes to be constructed with a minimum length of 15 meters and minimum width of 8 metres (width of three (3) meters for each route).`,

      `Bouldering: The climbing structure shall normally allow for the construction of at least ten (10) independent boulders in order to accommodate parallel courses for each round. Height of the boulder is generally 4.5 meters. All boulders shall be constructed on an elevated platform and aligned in such a way that they are visible from any point in the public arena. Each boulder shall include a clearly marked area from which the competitor can see the boulder, and which shall include the safety matting.`,

      `Speed: Speed competitions shall take place on climbing routes with a nominal length of 15m, and minimum width of 6 meters constructed on purpose-designed, artificial climbing walls. The climbing surface shall have a minimum of two parallel lanes with the design of each lane (including the positioning of timing equipment). Climbing lanes may be adjacent or separate, but in the latter case the separation between lanes may not be greater than 1m and in all cases the lanes must be horizontally aligned.`
    ],
  },
  {
    title: 'Management Of The Sport in India',
    content: [
      `The Indian Mountaineering Foundation (IMF) coordinates climbing events across India...`,
      {
        tableTitle: 'Zonal Committees and Their Jurisdictions',
        columns: ['ZONAL COMMITTEE', 'JURISDICTION'],
        rows: [
          {
            zonalCommittee: 'IMF North Zone Committee, New Delhi',
            jurisdiction: 'Jammu & Kashmir, Punjab, Haryana, Uttar Pradesh, Delhi, Uttarakhand'
          },
          {
            zonalCommittee: 'IMF South Zone Committee, Bengaluru',
            jurisdiction: 'Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Kerala'
          },
          {
            zonalCommittee: 'IMF East Zone Committee, Kolkata',
            jurisdiction: 'West Bengal, Odisha, Jharkhand, Bihar, Sikkim'
          },
          {
            zonalCommittee: 'IMF West Zone Committee, Pune',
            jurisdiction: 'Maharashtra, Rajasthan, Madhya Pradesh, Chhattisgarh, Goa'
          },
          {
            zonalCommittee: 'IMF North East Zone Committee, Manipur',
            jurisdiction: 'Manipur, Assam, Arunachal Pradesh, Meghalaya, Mizoram, Nagaland, Tripura'
          },
          {
            zonalCommittee: 'Services Zone',
            jurisdiction: 'Indian Army, Air Force and Navy'
          },
          {
            zonalCommittee: 'Police Service Zone',
            jurisdiction: 'ITBP, BSF, CRPF and other CAPFs'
          }
        ]
      }
    ]
  },
  {
    title: 'Competitions',
    content: [
      `Each Zone organizes the Zonal Championship amongst the youth drawn from the respective states. Zones select 26 athletes to take part in the national championship which is held annually in Nov-Dec every year for the various age categories. However since 2018 06 Open National Championships (two for each discipline-Lead, Speed & Bouldering) are organized annually. The first Nationals was held in 1996 at New Delhi. The IMF ensured that the Nationals is a platform for upcoming and the legendary athletes.`,
      {
        tableTitle: 'Age Group',
        columns: ['Men/Women', 'Age Group', 'Lead', 'Speed', 'Bouldering'],
        rows: [
          { menWomen: 'Junior Boys/Girls', ageGroup: '14-16 years', lead: true, speed: true, bouldering: true },
          { menWomen: 'Sub Junior Boys/Girls', ageGroup: '10-13 years', lead: true, speed: true, bouldering: true },
        ]
      },
      `Competitions are held keeping the Asian/ world parameters in view. Athletes are selected to take part in the three (Lead, Speed & Bouldering) events of the Asian Championship and then on to the world Cups/ World Championship.`,
    ]
  },
  {
    title: 'World level competitions',
    content: [
      `1. World Cup (Above 16 yrs) ___________ held every year`,
      `2. World Youth (above 16 yrs) ___________ held every year`,
      `3. World Championship (16 yrs) ___________ held in two years`,
      `4. World Para Climbing (above 16 yrs) ___________ held in two years`
    ]
  },
  {
    title: 'Asian competitions',
    content: [
      `1. Asian championship (Above 16 yrs) ___________ held every year`,
      `2. Asian youth championship (14-18 yrs) ___________ held every year`
    ]
  },
  {
    title: 'Training courses',
    content: [
      `Training camps/ courses are conducted by the various Zones and also at the IMF Campus in New Delhi.`,
      `• Sport Climbing Introductory course: 5 day foundation level course for athletes`,
      `• Belayer Course: 3 day course`,
      `• Route Setters Course: 5 day course`,
      `• Judges Course: 3 day course`
    ]
  },
  {
    title: "India's Achievements in International Events",
    content: [
      `2 Silver medals in 2002 Asian Youth Championship, Malaysia`,
      `1 Silver & 1 Bronze in 2004 Asia Cup, Uttar Kashi, India`,
      `1 Bronze in 2005 Asian Youth Championship, Hong Kong`,
      `2 Silver medals in 2008 Asian Youth Cup, Bali`,
      `1 Bronze in 2008 Asian Youth Championship`,
      `11 Medals (3 Golds) in 2009 Asian Youth Championship, Kazakhstan`,
      `1 Silver and 1 Bronze in 2009 World Trex Games, Korea`,
      `3 Silvers in 2011 Asian Youth Championship, Singapore`,
      `1 Gold in 2012 at World Para Climbing Championship`,
      `1 Bronze in 2013 Asian Youth Championship`,
      `1 Gold, 2 Silver and 1 Bronze in 2015 Asian Youth Championship`,
      `1 Gold in 2017 Asian Youth Championship Singapore`
    ],
    imageUrl: 'https://indmount.org/IMF/images/Sport_climbing_prize.jpg'
  },
  {
    title: 'International events in India',
    content: [
      `IMF regularly hosts several International level competitions in India which attract top international athletes.`,
      `Some of the events conducted and planned in future are given below`,
      `• Asia Cup, UttarKashi 2004`,
      `• Bouldering World Cup at Navi Mumbai in 2016/2017`,
      `• Bengaluru Bouldering Championship, Sept 2017`
    ]
  },
  {
    title: 'Benefits of Sport Climbing',
    content: [
      `Combines cardio and strength into a single workout: During a single session of rock climbing, the body executes a number of physical tests, including boosting heart rate, building muscle and developing stamina. The upper body strength required for rock climbing is a given for pulling oneself up, while the legs and core build muscle as the body strives to find balance. According to a 1997 study published in the British Journal of Sports Medicine, the cardio and energy consumed rock climbing is similar to running at a pace between 8 and 11 minutes per mile.`,
      `• Strengthens and tones muscles: Rock climbing requires several different muscles groups to be engaged during the workout. Abs, obliques, delts, traps, biceps, lats, quad, calves. In fact, rock climbing even works your forearm muscles by strengthening a climber's grip. Virtually all major muscles groups are incorporated in a single rock climbing expedition. A review published in the Journal of Human Kinetics in 2011 reported that elite rock climbers often have lower body mass indexes, lower body fat percentages, and increased handgrip strengths`,
      `• Increases flexibility: Rock climbing encourages participants to increase their range of motion. Rock climbing demands flexibility and adaptability as it requires climbers to reach, leap and climb to handholds and footholds usually far from a comfortable distance. According to the July 2011 issue of "Medicine & Science in Sports & Exercise", the American College of Sports Medicine suggested stretching should be done at least twice a week to increase flexibility, range of motion and improve blood circulation`,
      `• Mental strength: In bouldering the routes climbers take are called problems-and so, as a rock climbing requires problem-solving skills. Navigating routes demands a climber to judge their individual abilities, such as reach, strength required to complete the next step, current energy levels and route planning. Furthermore, rock climbing requires hand-eye coordination necessary for a climber to judge what he or she sees in a crag and how to reach it`,
      `• Reduces stress: Rock climbing reduces stress by increasing levels of norepinephrine, a neurotransmitter in the body that aids in releasing stress, and improving mood, climbing can aid in the prevention of chronic illnesses, such as heart disease, high blood pressure, high blood cholesterol and diabetes. The Centers for Disease Control and Prevention said rock climbing was a vigorous and intense physical activity and because of its health benefits in reducing stress, cardiovascular activity and building muscle, rock climbing can decrease the risk for various chronic illnesses`,
      `• Breathtaking sights: Regardless of whether a climber is indoors or outdoors, climbing unanimously partake in the euphoric feeling of being on top of the world. In reaching the summit of a climb, climbers view the vantage point from a breathtaking vantage point from an awe-inspiring, birds-eye view. This view will oftentimes be accompanied by adrenaline, happiness and excitement, all of which are positive feelings that foster a sense of accomplishment and just reward, especially after putting in so much work.`,
      `• Conquers fears: Fear is among the greatest obstacles which prevent us from enjoying life to its fullest extent. Since of the most commonly held fears among people are the fear of heights and the fear of falling from heights. Rock climbing is a fantastic way conquer these fears. Climbers are frequently strapped to harnesses, whether or not the climb is being done indoors or outdoors. The harness serves as a safety measure, preventing climbers from falling when they should lose their balance or grip. With the security of the harnesses, climbers can reach heights at their own comfort level. Conquering this fear of heights empowers many climbers and helps build confidence and self-esteem`,
      `• Challenge yourself: As confidence and self-reliance increase within climbers, climbers find themselves standing on the edge of their comfort zones. Climbing provides many with the opportunity to tap into the mind and body's limitless potential, enabling them to push themselves further in completing increasingly complex routes. Even when a route is completed, climbers will continue to tackle more challenges with even greater enthusiasm`
    ]
  },
];

export default function SportClimbing() {
  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #e0e7ff, #f8fafc)', py: 6 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 5,
            p: 4,
            borderRadius: 3,
            background: '#1e3a8a',
            color: '#fff',
            boxShadow: 4,
          }}
        >
          <Typography variant="h3" fontWeight="bold">SPORT CLIMBING</Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            Explore the art and science of vertical movement
          </Typography>
        </Box>

        {/* Content Cards */}
        {sections.map((section, index) => (
          <Fade in timeout={500 + index * 200} key={index}>
            <Card
              elevation={3}
              sx={{
                mb: 5,
                p: 4,
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  color: '#1e3a8a',
                  borderLeft: '6px solid #1e3a8a',
                  pl: 2,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>

              <Divider sx={{ mb: 2 }} />

              {Array.isArray(section.content) ? (
                <>
                  {section.title !== "India's Achievements in International Events" && section.content.map((item, i) => {
                    if (typeof item === 'string') {
                      return (
                        <Typography key={i} variant="body1" sx={{ mb: 1.5, lineHeight: 1.8 }}>
                          {item}
                        </Typography>
                      );
                    } else if (typeof item === 'object' && item.rows && item.columns) {
                      return (
                        <Box key={i} sx={{ mt: 2, overflowX: 'auto' }}>
                          <Typography variant="h6" fontWeight="medium" sx={{ mb: 1 }}>
                            {item.tableTitle}
                          </Typography>
                          <Table>
                            <TableHead>
                              <TableRow>
                                {item.columns.map((col, idx) => (
                                  <TableCell
                                    key={idx}
                                    sx={{
                                      border: '1px solid #ccc',
                                      padding: '8px',
                                      backgroundColor: '#f0f0f0',
                                      textAlign: 'left',
                                    }}
                                  >
                                    {col}
                                  </TableCell>
                                ))}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {item.rows.map((row, rowIndex) => (
                                <TableRow key={rowIndex}>
                                  <TableCell sx={{ border: '1px solid #ccc', padding: '8px' }}>
                                    {row.menWomen || row.zonalCommittee}
                                  </TableCell>
                                  <TableCell sx={{ border: '1px solid #ccc', padding: '8px' }}>
                                    {row.ageGroup || row.jurisdiction}
                                  </TableCell>
                                  {item.columns.length > 2 && (
                                    <>
                                      <TableCell sx={{ border: '1px solid #ccc', padding: '8px' }}>
                                        {row.lead && <CheckIcon color="success" />}
                                      </TableCell>
                                      <TableCell sx={{ border: '1px solid #ccc', padding: '8px' }}>
                                        {row.speed && <CheckIcon color="success" />}
                                      </TableCell>
                                      <TableCell sx={{ border: '1px solid #ccc', padding: '8px' }}>
                                        {row.bouldering && <CheckIcon color="success" />}
                                      </TableCell>
                                    </>
                                  )}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      );
                    }
                    return null;
                  })}
                  {section.title === "India's Achievements in International Events" && section.imageUrl && (
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      <Grid item xs={6}>
                        {section.content.map((item, i) => (
                          typeof item === 'string' && (
                            <Typography key={i} variant="body1" sx={{ mb: 1.5, lineHeight: 1.8 }}>
                              {item}
                            </Typography>
                          )
                        ))}
                      </Grid>
                      <Grid item xs={6}>
                        <img
                          src={section.imageUrl}
                          alt="Achievements in International Events"
                          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                        />
                      </Grid>
                    </Grid>
                  )}
                </>
              ) : (
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {section.content}
                </Typography>
              )}
            </Card>
          </Fade>
        ))}
      </Container>
    </Box>
  );
}