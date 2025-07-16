import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Link,
  Paper,
  Table,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemText,
  Divider,
  TableHead,
} from "@mui/material";
import { useLocation } from "react-router-dom";

function ExpeditionRule() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto"
    });
  }, [pathname]);

  const tableData = [
    {
      range: "Below 6500m",
      charge: "US$ 500 for a team of two members and US$ 225",
    },
    {
      range: "6501 to 7000m",
      charge: "US$ 700 for a team of two members and US$ 325",
    },
    {
      range: "7001 and above",
      charge: "US$ 1000 for a team of two members and US$ 450",
    },
    {
      range: "For trekking peaks",
      charge:
        "US$ 200 for a team of two members and US$ 50 for each additional member for up to a maximum of fifteen members.",
    },
  ];

  const tableDataOne = [
    {
      id: "a",
      range: "Area 'A' - Six expeditions per year",
      charge: [
        "- Saser Kangri - I",
        "- Saser Kangri - II",
        "- Saser Kangri - III",
      ],
    },
    {
      id: "b",
      range: "Area 'B' - Three expeditions per year",
      charge: [
        "- Mamostong Kangri",
        "- Rimo Group of peaks",
        "- Unnamed Peak (6010 M)",
      ],
    },
    {
      id: "c",
      range: "Area 'C' - One expedition per year",
      charge: [
        "- Apsaras I, II, III",
        "- Teram Kangri I, II, III",
        "- Singhi Kangri, Sia Kangri",
        "- Ghaint I and II",
        "- Indira Col",
      ],
    },
  ];

  const tableDataTwo = [
    {
      range: "Planning",
      charge:
        "Choice of the climbing objective must be a function of expertise, experience, technical",
    },
    {
      range: "Insurance",
      charge:
        "Additional clause for altitude and exposure related physiological conditions (Frost Bite, Hypothermia, HAPE,and HACEetc.) should preferably be included in the scope of insurance or covered through a separate 'Medi claim' policy.",
    },
    {
      range: "Gear Check",
      charge:
        "Use quality gears particularly the high dependence items such as: ropes (inspection, palpation and aging), runners and slings, carabiners, harness and helmets. It is recommended that safety helmets and inter camp communication equipment Is carried and used by team members",
    },
    {
      range: "Medical Experience",
      charge:
        "The team leader should obtain a medical fitness certificate for undertaking the expedition from each member. The team should preferably include a doctor or paramedic.",
    },
    {
      range: "Medical Courses",
      charge:
        "Expedition Leader and Member's are advised to participate in Training program titled Emergency Responder First Aid for Wilderness. Program schedule is available on IMF website",
    },
    {
      range: "Weather",
      charge:
        "Do a pre-climb mountain weather check but remember to do a day-to-day corroboration with visual inspection as Himalaya are notorious for sudden development of un-expected severe micro weather systems and also consult a local guide .",
    },
  ];

  const tableDatathree = [
    {
      id: 1,
      range: "Route with Itinerary (Beyond and up to base Camp) year",
      charge:
        "Attach GPS reading, showing date of climbing, time of climbing, height and location i.e. latitude and longitude",
    },
    {
      id: 2,
      range:
        "Summit Attempts (Brief description enclosing photographic proofs)",
      charge:
        "Attach photograph and video of Panoramic view of the area from the top of the peak Attach clear pictures and video of members on top of the summit for successful expedition and highest point reached for other expedition",
    },
    {
      id: 3,
      range:
        "Have you left the mountain clean and brought back all the garbage as per laid down environment guidelines",
      charge: "",
    },
    {
      id: 4,
      range: "Note on local culture, flora and fauna",
      charge: "",
    },
  ];

  const equipmentList = [
    "Climbing boots along with covers - 01 Pair",
    "Crampons - 01 Pair",
    "Ice-axe - 01 no.",
    "Windproof suit - 01 no.",
    "Down jacket - 01 no.",
    "Sleeping bag - 01 no.",
    "Carry mat - 01 no.",
    "Rucksack - 01 no.",
    "Socks - 02 Pairs",
    "Climbing harness - 01 no.",
    "Head Gear - 01 no.",
    "Gloves - 01 Pairs",
    "Goggles - 01 no.",
    "Two men tent - 01 no.",
    "Safety helmet - 01 no.",
    "Woolens - Vests, leggings, pullover, trousers and shirt",
    "Other essential items",
  ];

  const guidelines = [
    "Qualifications for Leader: Should be above 25 years of age and qualified in advance mountaineering course from a recognized Institute. Should have participated in at least two expeditions to peaks above 6,400m and reached the summit of at least one peak above 6,400m.",
    "Qualifications & Composition of Team: The team including the Leader should have 50% of members qualified on Advance Mountaineering Course with experience of expeditions. Out of the remaining, up to two members with high altitude trekking, rock climbing and related experience and others qualified on basic mountaineering courses may be included. The team finally selected should be capable of dealing with all possible contingencies.",
    "Equipment Hiring from IMF: Equipment would be available for hire against security deposit and would be subject to availability.",
    "Boarding/Lodging at IMF: Dormitory for 30 persons is available at IMF on first-come first-serve basis.",
    "Working hours at IMF: 10am to 5pm from Monday to Saturday except holidays and second Saturdays.",
    "Booking of Peaks: Would be done on first come first serve basis. A delay in submission of application and documents could result in cancellation of the provisional booking of the peak.",
    "Duration of Expedition: Peak(s) bookings are valid for 30 to 45 days from Base Camp to Base Camp. The permit will be granted for the same duration to maximum up to 30 to 35 climbing members. The mountains attracting more climbers than above will be given climbing permit with the gap of 10 days. The team members should be educated and be prepared to attempt the mountain alongside other expeditions.",
    'Report and Certificate: The IMF will issue the "Climb Certificate" only after the receipt of expedition report. Prior to the issue of "Climb Certificate", IMF may review the report through IMF Expedition Report Verification Committee. In case of any irregularity in the report, suitable regulatory action will be taken against the expedition.',
    "Member in a Team: All expeditions, including joint expeditions, will have a maximum twelve and minimum two climbing members. Expeditions will not be allowed to take trekking parties, film crews or others as additional members.",
    "Violations & Penalties: Any member of an expedition/tour operators (if expedition organized through an agency), found climbing or attempting to climb a peak without permit from IMF or violating the environment protection rules, shall be liable to be debarred from undertaking any mountaineering expedition in India for a period ranging from 02 to 05 years. In addition, they may be dealt with under the relevant laws. For any accident due to negligence on the mountain, Leader shall be held accountable and debarred from participating in mountaineering expeditions for a period ranging from 02 to 05 years.",
  ];

  return (
    <Container sx={{ backgroundColor: "#fff", py: 4 }}>
      {/* <Typography variant="body2" color="textSecondary" mb={2}>
        Home / About Climbing In India / Expedition Update / Expedition
        Application Process
      </Typography> */}

      <Typography
        variant="h4"
        fontWeight="bold"
        color="orange"
        mb={2}
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        Expedition Application Process
      </Typography>

      <Typography
        variant="h6"
        fontWeight="medium"
        color="text.primary"
        style={{ textAlign: "center" }}
      >
        RULES & REGULATIONS FOR FOREIGN EXPEDITIONISTS
      </Typography>

      <Typography variant="body1" mb={2} style={{ textAlign: "center" }}>
        Please refer to the step by step guide to Sign up and apply for
        expedition on IMF website.{" "}
        <Link href="#" color="orange" underline="hover">
          Download
        </Link>
      </Typography>

      <Typography variant="h6" fontWeight="bold" color="orange" gutterBottom>
        Foreign Expeditions
      </Typography>

      <Typography variant="body1" fontWeight="medium" mb={2}>
        <strong>
          (Foreign Users can also apply for Expedition using offline method.{" "}
        </strong>
        Download the attached application form.{" "}
        <Link href="#" color="orange" underline="hover">
          Download
        </Link>
        <strong>)</strong>
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        A foreign expedition team desirous of climbing a peak or peaks in India,
        shall apply to the Indian Mountaineering Foundation (IMF) on the
        prescribed application form along with prescribed amount with regards to
        handling charges and Liaison Officer fees minimum 90 days prior to the
        planned expedition. As soon as a proposal is received from the
        expedition team, the IMF books the peak(s) provisionally, subject to the
        availability on "first-come first-serve basis" and informs the party
        accordingly. The IMF allots a Registration Number to the expedition
        which must be quoted in all future correspondence. The expedition team
        must indicate an alternativepeakin their request while sending the
        proposal. Permission from the Govt of India to climb is essential and
        the Indian Mountaineering Foundation will take steps to obtain this
        permission on receipt of application form with full particulars and
        documents. On receipt of intimation of provisional booking from the IMF,
        the team should send the full amount through bank transfers at the
        earliest. IMF accepts applications for provisional booking of peaks up
        to three years in advance. These applications may be made on line or
        through Tour Operators listed with IMF along with 25% advance of the
        prescribed handling charges. In case of cancellation, 25% of the
        handling charges will be retained by the IMF. In case the expedition is
        postponed up to one year, 10% of these charges would be retained by the
        IMF. One per cent additional charges per month would be levied for each
        month beyond one year. Besides, if the peak is booked two years in
        advance from the date of actual climb, 25% additional advance would be
        levied after one year. Delay in receipt of application, incomplete
        applications, changes in planned peak/schedule/route as also
        addition/substitution of members would cause a further delay of four
        weeks in obtaining permission from the Govt of India. Peaks bookings are
        valid for 30 to 45 days from Base Camp to Base Camp. The permit will be
        granted to maximum up to 30 climbing members. Mountains attracting more
        climbers than above will be given climbing permit with a gap of 10 days.
        The team members should be educated and be prepared to attempt the
        mountain alongside other expeditions. The IMF reserves the right to
        cancel the allotment of peak/peaks at any time without assigning any
        reason. In such cases, the handling charges shall be refunded in full.
        The IMF also reserves the right to allot a particular peak to more than
        one expedition in the same season. In case an expedition desires to
        attempt additional peak/peaks in the open area for which permission has
        not been obtained, requests for such attempts can be made in writing to
        the Liaison Officer of the expedition who may allow such an attempt,
        provided that the peak/ peaks is/are not being attempted by other
        expeditions. The handling charges payable for such peak/peaks shall be
        50% of the normal charges. This amount will have to be paid to the IMF
        before the expedition team returns to their country.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Route:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Expedition will follow the route approved by the IMF and NO deviation is
        permissible except in an emergency and that too with prior written
        approval of the Liaison Officer(LO).{" "}
        <span style={{ fontWeight: "600" }}>
          {" "}
          Abandoning the Expedition:
        </span>{" "}
        Once the leader decides to abandon the expedition, the entire team will
        return to Delhi along with the LO and inform Director-IMF immediately.
        <span style={{ fontWeight: "600" }}>
          {" "}
          Splitting of the Expedition Team:
        </span>{" "}
        Splitting of expedition team into two or more sub-groups is NOT allowed
        for any purpose other than to climb the summit in the form of
        ropes/sub-groups beyond the base camp.
        <br />
        <span style={{ fontWeight: "600" }}>
          {" "}
          Arms/Ammunition/Explosives are not to be carried:
        </span>{" "}
        Expedition parties will not carry arms/ammunition/explosives during the
        expedition.
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Walkie talkie Sets:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Expeditions are advised to use hand-held walkie-talkie sets for
        inter-communication within the expedition ahead of the Base Camp.
        Walkie-talkie sets may be brought by expedition teams or obtained on
        hire from the IMF stores at nominal rates. Booking has to be done with
        IMF well in advance to avoid last minute disappointment.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Briefing and Debriefing:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        The leader of the expedition, representative of Tour Operator, if any,
        and LO shall report to the Director, IMF on arrival of team in India.
        The leader will furnish photocopies of team's passports with `X'
        mountaineering visas endorsed on them, details of custom's clearance,
        import of equipment, high altitude rations and trance-receiving
        equipment into India, insurance policies and other necessary details to
        the Director-IMF in the presence of the LO. On return from the
        expedition, the leader of the expedition, along with the LO and
        representative of the Tour Operator, if any will report to the
        Director-IMF or his authorised representative for de-briefing and for
        submitting the report. A form for submission of the report will be
        issued to the leader and the LO of the expedition before departure for
        the peak. It is emphasised that the foreign expedition teams must do
        their best about completion of all procedural requirements in order to
        proceed for the peak after its arrival in India.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Liaison Officer:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Every foreign expedition will be required to be accompanied by an Indian
        LO appointed by the IMF. The LO will be treated as a member of the
        expedition and provided with the following equipment/clothing from IMF
        stores on payment of{" "}
        <span style={{ fontWeight: "600" }}>US$ 500 by the team:-</span>
        <List>
          {equipmentList.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={`${index + 1}. ${item}`}
                  primaryTypographyProps={{ fontSize: 14, lineHeight: "1px" }}
                />
              </ListItem>
              {/* {index !== equipmentList.length - 1 && } */}
            </React.Fragment>
          ))}
        </List>
        <br />
        The LO shall extend maximum possible assistance to the expedition team
        in custom clearance, making purchases, hiring of porters, mules/yaks,
        booking of accommodation on the way to the mountains, hiring of
        transport from Delhi to the road head and back, maintaining liaison with
        the local civil, military and para-military authorities.In case of death
        of any member/porter, LO will obtain death certificate from DC before
        leaving the mountain. He shall, however, not handle any cash nor
        undertake any financial transactions on behalf of the leader/expedition.
        TheLO may go to higher camps and even to the summit according to his or
        her experience and competence. All facilities with regards to boarding,
        lodging and transportation during road journey and on mountain will be
        provided to LO as being provided to team members. The pay and allowances
        of every LO is paid by their employers in India for the duration of the
        expedition and cost of reaching New Delhi and going back to his or her
        place of residence is not the liability of the expedition team. On
        termination of the expedition, the LO will submit a report online or on
        the form to be obtained from the IMF.
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Import/ Export of Mountaineering Equipment
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Equipment, non-consumable and consumable, imported by a party into
        India, shall be subject to the following conditions: 18 Equipment and
        non-consumable and consumable stores will be allowed temporarily free
        entry without customs duty subject to an undertaking being furnished by
        the leader of the expedition to the effect that the equipment and
        non-consumable stores will be re-exported out of India and that no part
        of it will be sold or otherwise disposed of in India, failing which
        customs duty will have to be paid by the expedition team.
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Handling Charges
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        <span style={{ fontWeight: "600" }}>
          {" "}
          Handling charges at the following rates: will be applicable:
        </span>
        <br /> <br />
        <Table>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ border: "1px solid #ccc", fontWeight: 500 }}
                  width="40%"
                >
                  {row.range}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  {row.charge}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="body2" mt={1} fontStyle="italic">
          Note: For East Karakoram only joint expeditions with Indian
          counterparts are permitted as per Government of India directives.
        </Typography>
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Remarks:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Liaison Officer Equipment Hire charges US$ 500 in addition to the
        handling charges. Expeditions seeking to climb peaks located in the
        states of Uttarakhand and Sikkim may refer:
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Note:
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Expeditions seeking to climb peaks located in the states of Uttarakhand
        and Sikkim may refer:
        <br />
        20 Special Guidelines issued by the Uttarakhand Govt
        <br />
        21 Special Guidelines issued by the Sikkim Govt
      </Typography>

      <Typography
        variant="h6"
        fontWeight="bold"
        color="orange"
        mt={3}
        gutterBottom
      >
        Joint Expeditions
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        In accordance with the objectives of the IMF, joint mountaineering
        expeditions are encouraged to promote goodwill and better understanding
        amongst the countries. Any group of foreigners, their clubs/associations
        or their sponsors/organizers can apply to the IMF for a joint expedition
        to peaks in the Indian Himalaya. However, if they wish to join any
        specific Indian club/association for that particular expedition, they
        may ask that club to apply separately to the IMF to form part of that
        expedition. The overallleader of the expedition will be the Indian team
        leader while the foreign team leader will be the deputy leader. Charges
        for joint expeditions will be the same as for the other expeditions.
        Handling charges will be paid by the foreign component whereas the
        Indian component is exempted from such payment. A joint expedition shall
        also be accompanied by a LO appointed by the IMF.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Expeditions to Eastern Karakoram
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        For expeditions to the Karakoram region, the Govt of India has divided
        the region into three areas. Ten joint expeditions or purely Indian
        expeditions may be permitted each year, after acceptance of the
        application and clearance by the Govt of India. Details are as follows:
        <br /> <br />
        <Table>
          <TableBody>
            {tableDataOne.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ border: "1px solid #ccc", fontWeight: 500 }}
                  width="2%"
                >
                  ({row.id})
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc", fontWeight: 500 }}>
                  {row.range}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  <List dense disablePadding sx={{ pl: 2 }}>
                    {row.charge.map((item, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        A maximum of six foreigners and six Indians on each expedition to the
        East Karakoram region will be permitted. Minimum strength of such an
        expedition will be two each. The LO for joint expeditions to the Eastern
        Karakoram will be an Indian Army Officer.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Search & Rescue
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        In case of accident or death of an expedition member, the leader shall
        notify the LO who shall report this to the nearest police station and
        get in touch with the District Commissioner/Magistrate or the nearest
        Civil/Army/Police authorities for assistance. If any assistance is
        needed from the military or para - military forces, the LO shall arrange
        the same. If a helicopter is needed to search /rescue/evacuate an
        injured/ ill person, arrangements can be made for evacuation to the
        nearest hospital. Charges for helicopter rescue sorties, including the
        abortive ones due to bad weather, are to be paid at the prescribed govt
        rates for each helicopter sortie, depending upon the flight time, etc.
        The charges are to be borne by the expedition team.
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Insurance of Team Members, Headmen & Porters
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Members of the expedition must have insurance cover for accident risks
        and ground/ helicopter search and rescue. A copy of the insurance policy
        is required to be handed over to the IMF at the time of briefing of the
        expedition in New Delhi. This insurance policy should have a clause that
        in the event of an accident, all charges connected with
        ground/helicopter search and rescue would be covered.
        <br />
        All expeditions/tour operators concerned would insure mountain guides,
        porters, HAP and cooks etc. supporting them, against accident for the
        entire duration of the expedition.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Expeditions to Eastern Karakoram
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Any member of an expedition/tour operators (if expedition organized
        through an agency), if found climbing or attempting to climb a peak
        without permit from IMF or violating the environment protection rules,
        shall be liable to be debarred from undertaking any mountaineering
        expedition in India for a period ranging from 02 to 05 years or a fine
        ranging from two to four times the amount of handling charges for the
        permit or both.In addition, they may be dealt with under the relevant
        laws.
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        The Leader/Tour Operator have to submit an undertaking for participation
        of Indian team members in the expedition as under:-
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8, fontWeight: 600 }}
      >
        {" "}
        I hereby undertake that each Indian member participating in this
        expedition voluntarily and at his/her own risk. IMF would not be held
        responsible on any account, whatever, either by the organizer or the
        participants. All Indian members have adequate climbing experience in
        addition to high altitude treks and rock climbing experience.
      </Typography>

      <Typography variant="h6" color="orange" mt={3} gutterBottom>
        Indian Expeditions
      </Typography>
      <Typography variant="body1" fontWeight="medium" mb={2}>
        <strong>
          (Foreign Users can also apply for Expedition using offline method.{" "}
        </strong>
        Download the attached application form.{" "}
        <Link href="#" color="orange" underline="hover">
          Download
        </Link>
        <strong>)</strong>
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8, marginTop: "20px" }}
      >
        {" "}
        This section contains the Guidelines for planning and conduct of
        expeditions, financial assistance admissible from IMF, Application for
        Expedition and the Expedition Report has to be submitted online As the
        expedition organiser we would encourage you to be fully aware and
        compliant with various conditions in regard to issue of the permit being
        issued by the IMF
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Environment Guidelines
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        The Indian Mountaineering Foundation has established guidelines with a
        view to ensure that the Indian Himalaya is maintained well. It is
        imperative that expeditions do not find mountaineering gear and garbage
        at base camp and on the mountain, left by earlier expeditions. The IMF
        has laid down general and specific instructions for garbage and
        equipment management by an expedition..
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        General Instructions for Garbage Management:
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        All members as well as the support staff must be thoroughly briefed and
        trained adequately for them to be able to differentiate between
        Biodegradable and Nonbiodegradable waste and its mode of disposal
        <br />
        At altitudes in excess of the snow line, natural decomposition processes
        are slowed, thus the waste pollutes the mountain for many years. It
        should be a conscious effort to leave the camp-sites and trails cleaner
        than they were found.
      </Typography>
      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Specific instructions related to Disposal of Waste on the Mountain:
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Bio-degradable waste is a type of waste that can be broken down into its
        base compounds by micro-organisms, air, moisture or soil in a reasonable
        amount of time. It includes green waste, food, paper, bio-degradable
        plastics, human waste etc. Bio-degradable waste is to be suitably
        disposed only below the snow line. At Base Camp a deep Toilet hole must
        be dug in soil and all human excretion produced must be dumped in it
        during the teams stay. Bio-degradable kitchen waste has to be deposited
        in a deep hole at base camp which is to be covered at the end of the
        expedition. Non-biodegradable waste is a type of waste that cannot be
        broken down into its base compounds by micro-organisms, air, moisture or
        soil. Unlike biodegradable waste, nonbiodegradable waste remains stable
        indefinitely. Because non-biodegradable waste cannot be broken down,
        recycling is the only option. Non-biodegradable waste includes rubber,
        Styrofoam, plastic, glass, metals etc.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Non-biodegradable waste is to be:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Collected in sacks and carried down from the camps to the road head.
        <br></br>
        Disposed at or below the road head.<br></br>
        Must be disposed by submission to vendors and other local garbage
        collectors in the area or as directed by local authorities.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Specific instructions related to Mountaineering Equipment:
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        All ropes and technical climbing equipment must be retrieved and carried
        back except in the cases where safety is likely to be compromised. Non
        compliance of this instruction must be supported by reasons in the
        expedition report. All tents, bivouac material and other permanent camp
        stores should not be left behind on the mountain.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Instructions for Compliance of Environment Guidelines:
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        <span style={{ fontWeight: "600" }}> Photo Evidence- </span>pertaining
        to garbage disposal and equipment retrieval must be included in the
        expedition report. Teams observing noncompliance of IMF guidelines by
        earlier expeditions are requested to present photographic evidence to
        IMF.
        <br />
        <span style={{ fontWeight: "600" }}> IMF representatives </span>are
        being deployed to conduct random checks on expeditions on the mountains
        and collect evidence of any violations of IMF guidelines.
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Safety Guidelines
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Disclaimer: Safety advisory section as stated below is not intended to
        contain comprehensive material but rather serve asimportant basic points
        which have evolved over the years from previous expeditions.
        <br /> <br />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ border: "1px solid #ccc", fontWeight: 700, width: "17%" }}
              >
                Subject
              </TableCell>
              <TableCell sx={{ border: "1px solid #ccc", fontWeight: 700 }}>
                Advisory Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableDataTwo.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ border: "1px solid #ccc", fontWeight: 600 }}
                  width="17%"
                >
                  {row.range}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  {row.charge}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Additional Information for Leader
      </Typography>
      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        <List>
          {guidelines.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ mb: 1 }}>
              <ListItemText
                primary={`${index + 1}. ${item}`}
                primaryTypographyProps={{
                  fontSize: 15,
                  lineHeight: "20px",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Typography>

      <Typography variant="h6" color="black" mt={3} gutterBottom>
        Expedition Reporting Guidelines
      </Typography>

      <Typography
        variant="body2"
        color="text.primary"
        sx={{ textAlign: "justify", lineHeight: 1.8 }}
      >
        {" "}
        Leader is required to forward Expedition report to IMF within two months
        of first summit attempt. The guidelines for filling the report are
        available on IMF website.
        <br />
        <br />
        <Table>
          <TableBody>
            {tableDatathree.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  sx={{ border: "1px solid #ccc", fontWeight: 500 }}
                  width="2%"
                >
                  {row.id}
                </TableCell>
                <TableCell
                  sx={{ border: "1px solid #ccc", fontWeight: 600 }}
                  width="40%"
                >
                  {row.range}
                </TableCell>
                <TableCell sx={{ border: "1px solid #ccc" }}>
                  {row.charge}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Typography>
    </Container>
  );
}

export default ExpeditionRule;
