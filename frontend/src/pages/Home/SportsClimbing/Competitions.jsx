import React from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Typography,
  Container,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#003087",
    },
    background: {
      default: "#e9efff",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    h3: { fontWeight: 700, fontSize: "2.2rem" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 500 },
  },
});

const SectionCard = ({ title, children }) => (
  <Card
    sx={{
      mb: 4,
      p: 3,
      borderRadius: 3,
      backgroundColor: "#ffffff",
      boxShadow: 3,
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <Box
          sx={{
            width: "4px",
            height: "100%",
            backgroundColor: "primary.main",
            mr: 2,
          }}
        />
        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: 600, fontSize: "1.3rem" }}
        >
          {title}
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      {children}
    </CardContent>
  </Card>
);

function Competitions() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h3"
          color="primary"
          align="center"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Competitions
        </Typography>

        <SectionCard title="Sport Climbing as a Competitive Sport">
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Sport climbing on an artificial wall surface was officially
            confirmed as an additional sport for the Tokyo 2020 Olympic Games by
            the IOC Session in Rio de Janeiro in August 2016 and it has been
            included as a medal sport in the 2018 Youth Olympic Games in Buenos
            Aires. The International Federation of Sport Climbing (IFSC) is the
            international governing body for the sport of competitive climbing.
            It was founded in Frankfurt on 27 January 2007 by 48 member
            federations. The IFSC is recognized by the IOC, is member of ARISF,
            Sport Accord and IWGA.
          </Typography>
        </SectionCard>

        <SectionCard title="International Competitive Disciplines">
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            a) <strong>Lead:</strong> Lead is the most classic sport climbing
            discipline. Competitors climb a long difficult route designed and
            set by the route setter , and attempt to reach the top, which in
            climbing terms, is the end of the route. The climber's performance
            equates to the highest hold reached, and whether that hold was
            "controlled", meaning the climber achieved a stable position on that
            hold, or "used", meaning the climber used the hold to make a
            controlled climbing movement in the interest of progressing along
            the route. All standard Lead competitions consist of three rounds:
            qualifications, semifinals, and finals. In the qualification round
            competitors climb 2 similar routes 'flash', meaning there is no
            isolation and they can watch other competitors climb before their
            own attempt. Their rank will then be calculated as the square root
            of their rank on either route multiplied by each other. In the
            Semifinals and Finals athletes climb a route "on-sight", meaning
            they enter isolation before the round begins, then they go for
            'observation', a 6-minute period in which the athletes are allowed
            to see the route for the first time and visualize moves. After that
            they go back to isolation and come back for their attempt one by
            one, and their starting order is the reverse of the ranking order of
            the previous round, i.e. the better the athlete's performance, the
            later they start their attempt for the next round. In the case of
            ties, the athlete's rank from the previous round is taken into
            account (the "countback" process). In the Finals, and if the tie is
            not broken using the countback process, the climbing time will be
            considered. (lower times are better) In lead, climbers are belayed
            from below, and are required to clip quickdraws along the route. The
            route must be climbed within a certain time limit, usually 6
            minutes, but can be extended to 7 or 8 minutes according to the
            route setter's opinion. 26 athletes qualify for the Semifinal, 8
            proceed to the Final.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            b) <strong>Speed:</strong> Speed is the only factor that counts in
            the Speed Climbing event. Competitors climb a slightly overhanging
            IFSC certified vertical piste with belaying from the top. Since 2007
            the IFSC has created a standard wall for the world record. The
            climbing time is determined by mechanical-electric timing (the
            competitor strikes a switch at the top of the route) but manual
            timing is also possible. When mechanical-electric timing is used,
            the climbing time shall be measured with an accuracy of 0.01 second.
            As of December 2012, Evgeniy Vaytsekhovskiy from Russia holds the
            men's 15 meter speed world record; 5.88 seconds. Esther Bruckner
            from France holds the woman's record at 8.33 which she set at the
            2012 WC.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            c) <strong>Team Speed:</strong> The new Team Speed discipline was
            introduced as a medal showcase for the 2011 World Championship. It
            is a relay competition with teams of three. The teams are made up of
            3 athletes of the same sex. (Before the 2012 set of rules was
            introduced, the teams had to be mixed sexes, hence usually two males
            and one female.) The race is held on the world record wall split
            into four lanes, two for each team. The first athlete races to hit
            the button at the top of the wall, at which point the second athlete
            climbs the second leg to release the third and final athlete whose
            final button marks the total time.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
            d) <strong>Bouldering:</strong> The bouldering competition consists
            of climbing without belay ropes on short walls. Falls are stopped by
            specifically engineered mattresses. This discipline is marked by
            high difficulty concentrated into a short route, the limited
            competition time and the close proximity to the spectators. It
            differs especially from Lead in one respect, that the climber can
            attempt a route more than once. The competitor's score is determined
            by the overall number of boulders sent by the him/her and the number
            of attempts needed. If athletes do not reach the finishing hold they
            may be awarded a bonus point for having reached a particular
            hold,the Bonus hold, which is marked by the route setter . In
            bouldering 20 athletes qualify for the Semifinal, and 6 proceed to
            the Final. Bouldering competitions at higher levels usually use
            Isolation as well as the roped competitions. In the USA, ABS
            (American Bouldering Series) organizes regional, divisional, and
            national comps.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            e) <strong>Dual:</strong> Dual is not yet an official medal
            competition,but it is part of Rock Master competition finals. Dual
            is a combination of lead and speed. The two athletes compete on two
            identical, parallel routes, and they are belayed from below. Whoever
            gets to the top first, wins.
          </Typography>
        </SectionCard>
        <SectionCard>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Sometimes climbers must climb the route on sight. This means that
            they are not allowed to see other climbers on the route, or receive
            any form of advice (beta) from other climbers, and have only a
            limited amount of time to visually inspect the route from ground
            level. (Otherwise later climbers would be able to learn from
            previous competitors' mistakes, giving them a considerable
            advantage.) In addition to competitions, festivals such as the
            Phoenix Boulder Blast and the International Climbing Festival (held
            in Lander, Wyoming ) are a gathering place for rock climbers from
            around the world. They feature trade shows for climbing specific
            merchandise, clinics from world-renowned climbers, and parties.
            There can be open competitive climbing or youth climbing. Youth
            climbing is competitions for children under 18 years of age. These
            competitions are separated into categories such as 11 and under,
            12-13, 14-15, etc. Competitions can be held anywhere across the
            country, for that reason, competitions are divided into divisions.
            There are five divisions. In the end, there is a national
            competition that invites the top 5 climbers from each division to
            compete. There are about 30 girls and 30 boys invited to compete in
            national competitions. There are two sections to these competitions,
            the semifinals and the finals. Only the top ten people competing can
            make it into finals. At the end of the final round, the top four
            winners of every age category would be invited to compete in
            international competitions. In the United States, Youth Climbing is
            organized by USAC (USA climbing). The World Championship as well as
            the World Cup and the European Championship competition is
            administered by the International Federation of Sport Climbing.
          </Typography>
        </SectionCard>
      </Container>
    </ThemeProvider>
  );
}

export default Competitions;
