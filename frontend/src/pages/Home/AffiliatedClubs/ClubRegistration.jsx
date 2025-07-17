import React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      //   main: '#e67e22',
      main: "#1e3a8a",
    },
    background: {
      default: "#e9efff",
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
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
      width: "975px",
    }}
  >
    <CardContent>
      {title && (
        <>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Box
              sx={{
                width: "4px",
                height: "100%",
                backgroundColor: "primary.main",
                mr: 2,
              }}
            />
            <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
        </>
      )}
      {children}
    </CardContent>
  </Card>
);

function ClubRegistration() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          IMF MEMBERSHIP
        </Typography>

        <SectionCard title="Honorary Members">
          <Typography variant="body1">
            Honorary members will be recommended by the GC for approval of the
            General Body. The persons should be of eminence in the field of
            mountaineering/Ecology/Glaciology/Geology/Flora/Fauna/ Mountain
            Photography/ Mountain medicine or any such field related to
            mountains and high altitude in particular and Himalaya in general.
            Age is no bar but such persons are likely be above 50 years of age.
          </Typography>
        </SectionCard>

        <SectionCard title="Ordinary Members">
          <Typography variant="body1">
            Ordinary members are members of the General Body (GB)and are
            admitted through a process that involves recommendation, invitation
            and election. Existing members can recommend accomplished
            individuals in IMF's areas of interest to become ordinary members.
            The recommendations are scrutinised by the Governing Council and a
            recommended list is presented at the Annual General Meeting.(AGM).
            The GB votes on list of recommendations and members are admitted if
            they obtain 2/3rd majority. Members thus admitted have full voting
            rights and have the right to attend the AGM.
          </Typography>
        </SectionCard>

        <SectionCard title="Associate Members">
          <Typography variant="body1">
            Associate members are selected from the community of mountaineers,
            trekkers and others interested or participating in allied adventure
            activities or contribute to the development, research and studies
            relating to mountains, mountain environment and allied subjects.
            Such persons selected by the Governing Council from applications
            received for the same. There is no membership fee for such
            individuals and Associate Members may be specially invited to AGM
            and to become members of various committees of the IMF. They
            however, do not have any voting rights.
          </Typography>
        </SectionCard>

        <SectionCard title="Club Affiliation">
          <Typography variant="body1" paragraph>
            <strong>
              (For detailed Club Affiliation Guidelines, please download and
              refer the attached.
            </strong>{" "}
            <a
              href="https://indmount.org/IMF/download?filePath=/imffs01/activities/guidelines/ClubAffiliationGuidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
              }}
            >
              Download
            </a>
            )
          </Typography>

          <Typography component="div" variant="body1" sx={{ pl: 2 }}>
            <ol style={{ paddingLeft: "1.2rem" }}>
              <li>
                Clubs/Association/Organizations related to the field of
                Mountaineering, Trekking, Sports Climbing, Allied and Adventure
                Land Based Activities can become affiliated members of Indian
                Mountaineering Foundation.
              </li>
              <li>
                The concerned bodies are to furnish the following:
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                  <li>Constitution showing the aim and objectives</li>
                  <li>
                    A photocopy of the Registration of Club/Association from
                    Registrar of Societies Office (for Indians). Copy of
                    Registration from respective Govt Dept of the Country
                  </li>
                  <li>List of Office bearers</li>
                  <li>List of Members</li>
                  <li>
                    When did the Association start and details of activities on
                    mountaineering/trekking
                  </li>
                  <li>
                    DD/Appropriate Money Transfer Instrument as per following
                    rates (yearly basis):
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>Indian Clubs – ₹2000/-</li>
                      <li>SAARC Countries Club – $100</li>
                      <li>Non-SAARC Countries – $500</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Benefits:
                <ul style={{ paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
                  <li>
                    25% discount on peak/expedition bookings (50% for SAARC
                    countries)
                  </li>
                  <li>
                    Preference and priority in clearances for joint expeditions
                  </li>
                  <li>
                    Complimentary subscription to the annual Indian Mountaineer
                    Journal
                  </li>
                </ul>
              </li>
              <li>
                Club Clearance: Foreign clubs must submit clearance/no objection
                from UIAA, the appropriate department of the parent country,
                Ministry of External Affairs, or the Central Mountaineering
                Agency of the parent country.
              </li>
              <li>
                Terms & Conditions: The clubs will be non-voting members of IMF.
                However, 30 affiliated Indian clubs/associations are selected as
                Institutional Members with voting rights, on a rotational basis
                for 3 years.
              </li>
            </ol>

            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>
                NOTE: Please refer the step-by-step guide to apply for "Club
                Affiliation" on the IMF website.{" "}
              </strong>
              <a
                href="https://indmount.org/IMF/download?filePath=/imffs01/activities/guidelines/ClubAffiliationUserManual.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "underline",
                }}
              >
                Download User Manual
              </a>
            </Typography>
          </Typography>
        </SectionCard>

        <SectionCard title="Affiliate Members">
          <Typography variant="body1" paragraph>
            Individuals can join IMF as affiliate members. Fees as per category:
          </Typography>
          <Table size="small">
            <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
              <TableRow>
                <TableCell>
                  <strong>Category</strong>
                </TableCell>
                <TableCell>
                  <strong>Eligibility</strong>
                </TableCell>
                <TableCell>
                  <strong>Annual Fee</strong>
                </TableCell>
                <TableCell>
                  <strong>Long Term Fee</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>General</TableCell>
                <TableCell>Mountaineer/adventure lover</TableCell>
                <TableCell>₹1000</TableCell>
                <TableCell>₹4000 for 5 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Affiliated Organization</TableCell>
                <TableCell>
                  Member of affiliated club or training course
                </TableCell>
                <TableCell>₹800</TableCell>
                <TableCell>₹3500 for 5 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell>Between 18–21 years</TableCell>
                <TableCell>₹600</TableCell>
                <TableCell>₹1500 for 3 years</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>International</TableCell>
                <TableCell>Residing outside India</TableCell>
                <TableCell>$50</TableCell>
                <TableCell>$200 for 5 years</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Download line below the table */}
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>
              Detailed Affiliate Membership Brochure is available for{" "}
            </strong>
            <a
              href="/downloads/AffiliateMembershipBrochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "underline",
              }}
            >
              Download
            </a>
            .
          </Typography>
        </SectionCard>

        <SectionCard title="To become an affiliate member, follow these steps">
          <Typography variant="body1" component="ol" sx={{ pl: 3 }}>
            <li>
              Create an account via{" "}
              <a
                href="/signup"
                style={{ color: "#1e3a8a", textDecoration: "underline" }}
              >
                Signup
              </a>
            </li>
            <li>
              If you already have an account,{" "}
              <a
                href="/login"
                style={{ color: "#1e3a8a", textDecoration: "underline" }}
              >
                Login
              </a>
            </li>
            <li>Click on “Create Profile”</li>
            <li>Select "Affiliate Membership" and complete the form</li>
          </Typography>
        </SectionCard>
      </Container>
    </ThemeProvider>
  );
}

export default ClubRegistration;
