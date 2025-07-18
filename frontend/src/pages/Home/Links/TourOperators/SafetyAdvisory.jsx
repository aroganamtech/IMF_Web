import React from "react";
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
  Card,
  CardHeader,
  CardContent,
  ListItemIcon,
} from "@mui/material";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function SafetyAdvisory() {
    const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", 
      });
    }, [pathname]);
  return (
    <div>
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="orange"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginTop: "20px",
          }}
        >
          ADVISORY(PRECAUTIONS & RECOMMENDATIONS)
        </Typography>
        <Typography
          fontSize="16px"
          color="orange"
          style={{ marginTop: "20px" }}
        >
          Precautions
        </Typography>
        <Typography
          fontSize="16px"
          color="orange"
          style={{ marginTop: "20px" }}
        >
          Recommendations
        </Typography>
        <Typography
          fontSize="16px"
          color="orange"
          style={{ marginTop: "20px" }}
        >
          Android Mobile App
        </Typography>
        <Typography
          variant="h4"
          color="black"
          mb={2}
          style={{ marginTop: "20px" }}
        >
          Precautions
        </Typography>
        <Typography color="black">
          Questions to be looked into by the participants / parents of
          participants and authorities encouraging persons to participate in
          outdoor activities. Please ask the following questions to the
          organisers and yourselves before deciding to join any adventure
          programmes.
        </Typography>

        <Typography color="orange" style={{ marginTop: "10px" }}>
          Matters to be inquired about the program
        </Typography>
        <Typography color="orange" style={{ marginTop: "10px" }}>
          Information about organisers to be obtained
        </Typography>
        <Typography color="orange" style={{ marginTop: "10px" }}>
          IMF Safety Guidelines for Tour Operators
        </Typography>
        <Typography variant="h6" color="orange" style={{ marginTop: "10px" }}>
          Matters to be inquired about the program
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1. Schedule for the programme with day to day activities to be
          conducted.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Check whether the program is realistic:
        </Typography>

        <Typography color="black" style={{ marginTop: "10px" }}>
          Duration of the trek, or camp, day to day programme, daily routine,
          specification of the activities: whether rock -climbing , river
          crossing , or only trail walking. The vital information about the trek
          should include stages for each day, distances, climb /or descent
          involved. Approximate altitude of each camp. Leisure and informative,
          activities like map-reading, rope practise, looking at flora and
          fauna, setting of a camp, all these should be part of the programme,
          only physical activities can be very exhaustive or boring. Programme
          should allow sufficient time to the participant to cope with the
          schedule. For high altitude areas specially sufficient time is
          necessary for acclimatisation.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          2. In case of Himalayan treks what will be the maximum altitude
          reached by the group on each day. What would be the approximate height
          gain from the last camp site at every stage. What would be the process
          of acclimatisation ?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Beyond 2500 m. (8000 ft) it is advisable to gain altitude gradually.
          It is suggested that for every 2000 ft gain at least two days of
          acclimatisation period be kept. Take proper assurance that the
          acclimatisation period planned for by the organisers is sufficient and
          will be adhered to. Above 15,000 ft climb high and sleep lower must be
          adopted to acclimatise. Plans for a hurried trip should not be
          accepted. Activities in a camp will also help acclimatisation.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          3. What are the major difficulties expected on the program as regards
          the terrain, facilities or of any sort that will affect the
          participant.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          The terrain on the Himalayan trails differ. One should have a fair
          idea of a simple walking trail, scree-slopes , crossing of the small
          nalas , simple safety rules are to be followed at each stage,
          depending on the age group. Please judge whether you would like to
          expose yourself or children to the difficulties / risks envisaged by
          the organisers.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          4. What is the level of fitness expected from the participants?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Trekking and camping is a sport There is a certain level of physical
          fitness required for altitude trekking. Trekking and camping at low
          levels can be done with minimum fitness and can be very enjoyable for
          young children. Please remember no child will get fit in two weeks
          time. If the child is not physically fit introduction to trekking
          should be with simple treks which will include only plain walking and
          camping .One must relate the level of fitness in a child and the level
          of trekking he is participating in. It should be an enjoyable
          experience. Please judge whether the participant meets the required
          level of fitness before starting on the trek. Take professional advise
          if you feel you are unable to judge for yourself.F
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          5. What are the medical facilities provided by the organisers. Whether
          a doctor will accompany the program and / or alternative plans to deal
          with medical problems. If a doctor is accompanying the group, nature
          of qualification.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Make sure you feel comfortable with the answers given to you as regard
          the medical facilities. Take professional advise if you feel you are
          unable to judge for yourself. If the child is big enough to look after
          his own self , on a trek the child also has to be briefed how to look
          after sore feet, sore throat , changing of wet socks, on types of
          clothing etc. Person in charge of medical facilities should be
          specifically trained in Wilderness first-aid and be aware of high
          altitude problems. A certificate to the effect that the volunteers /
          doctors are adequately qualified and / or experienced to conduct such
          activities should be ensured.{" "}
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          6. Communication channel to be utilised by the group during conducting
          the activities as well as in case of emergencies.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Parents must be able to contact the group in case of an emergency and
          please make sure you are also available in case they need to contact
          you. Keep addresses, phone numbers and details of the schedule handy
          for any emergencies. Please obtain proper details of all persons who
          are responsible for co-ordination with you.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          7. What are the facilities provided for accommodation throughout the
          program?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Please ensure you feel that the facilities to be provided. Are
          reasonable. This includes general safety of the camp location as well
          as hygienic camp-sites.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          8. What is the provision for water management for the program. How is
          water purity ensured? Does the team carry Electral / Glucose powder?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Ensure adequate care is being taken for sufficient supply of clean and
          purified water throughout the program. The health of the participant
          depends a lot on the drinking water. Each person must consume at least
          4 litres of liquid per day on a good trek.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Adequate liquid intake is the single-most important factor in
          preventing illness and fatigue.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Organisers should understand importance of water management and
          provide adequate supply of clean liquids: with water purifiers: like
          iodine and chlorine.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          9. Whether adequate equipment is available with the organisers for
          safely conducting the program ?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          The equipment required for trek and camping will vary according to the
          programme. A simple trail walk will require only camping tents etc.
          But rock climbing will require specialised equipment which is
          necessary for safety of the participants. Please take professional
          advise if you are not able to judge for yourself.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          9. Whether adequate equipment is available with the organisers for
          safely conducting the program ?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          The equipment required for trek and camping will vary according to the
          programme. A simple trail walk will require only camping tents etc.
          But rock climbing will require specialised equipment which is
          necessary for safety of the participants. Please take professional
          advise if you are not able to judge for yourself.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          10. What is expected by the organisers to be brought by the
          participants?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          The organisers must give exact list of things to be carried by the
          participants . Bare minimum yet very essential things are required on
          a trek. A torch , spoon, water bottle is essential but a pillow,
          Turkish towel is not necessary. Parents should minimise the things to
          be sent to the minimum and as advised by organisers.
        </Typography>
        <Divider sx={{ my: 2, color: "gray" }}></Divider>
        <Typography variant="h6" color="orange" style={{ marginTop: "10px" }}>
          Information about organisers to be obtained
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1. Whether the organisation is registered with the Indian
          Mountaineering Foundation?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Do not deal with organisations which are not registered with the
          Indian Mountaineering Foundation.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          2. What is the composition of the management of the organisation?
          Details of the antecedents of the management.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          A well established organisation, whether commercial or non-profit will
          always take care to ensure full safety of the participants. It is not
          advisable to go with temporary operators. Ensure that the organisers
          are responsible persons.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          3. A declaration that the organisers are adequately equipped /
          qualified / trained / experienced to conduct the activity and the
          volunteers will take adequate safety measures during the program.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          You must however be aware that any outdoor activity involves an
          inherent risk. Even in the best organised program, an accident can
          take place beyond the reasonable control of the organisers.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          4. Bio-data / experience of the Group Leader / Program Director in
          charge of the group. In what manner is he / she experienced /
          qualified to conduct the program? Who are High Altitude Supporters and
          camp helpers (porters, Sherpas, cooks) employed by them ?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          The person in charge should have sufficient experience in handling
          groups in the outdoors. In case of children, it is necessary that the
          person is able to deal with them specially, since children need
          special care in the mountains. The qualifications / experience should
          match the requirements of the program.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1. Whether the organisation is registered with the Indian
          Mountaineering Foundation?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Do not deal with organisations which are not registered with the
          Indian Mountaineering Foundation.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          5. Ask for at least five references of participants who have been on a
          program under the leadership / directorship / management of the person
          in charge accompanying the group.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Talk to all the five references and take a feedback on:
        </Typography>

        <List>
          <ListItem style={{ marginLeft: "7%" }}>
            <ListItemIcon>I.</ListItemIcon>
            <ListItemText primary="	Food, water, accommodation facilities provided"></ListItemText>
          </ListItem>
          <ListItem style={{ marginLeft: "7%" }}>
            <ListItemIcon>II.</ListItemIcon>
            <ListItemText primary="		Attitude / leadership and nature of the person in charge of the group."></ListItemText>
          </ListItem>
          <ListItem style={{ marginLeft: "7%" }}>
            <ListItemIcon>III.</ListItemIcon>
            <ListItemText primary="			Safety factors followed by the organisation."></ListItemText>
          </ListItem>
          <ListItem style={{ marginLeft: "7%" }}>
            <ListItemIcon>IV.</ListItemIcon>
            <ListItemText
              primary="		Whether safety instructions given to the child are clear, so that it can be followed well. The safety instructions are for enjoyment of the trek and not to frighten any one.
."
            ></ListItemText>
          </ListItem>
        </List>
        <Typography color="black">
          The rules of walking and climbing teach an individual to live and
          enjoy nature, it also teaches endurance in day today life without the
          city comforts. An outdoor experience should not be a torturous affair,
          but a pleasant experience.
        </Typography>

        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          6. Have a meeting with the organisers and meet the group leader.
          Question how he / she is going to go about taking care of the
          participants with respect to the above mentioned factors.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Ensure you are fully satisfied in all respects. If unsure, do not
          hesitate to express your doubts. If you are still not fully satisfied,
          do not get pressurised to join the program.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          7. If possible request for a slide show / video clip of the place to
          be visited.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Though this is not absolutely necessary and many times not possible.
          If it is possible this will give you a good idea of what you are going
          in for. If you are visiting an area you have not visited before, it
          would be a good idea to read information about the place, a sketch-map
          of the area should be given to each participant.. Ask the organisers
          to provide you information about the place. Expected climatic
          conditions of the region should be known.{" "}
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          8. Obtain a declaration that the participant has been examined by the
          organisers and is found medically fit to undergo the training /
          activity.
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          This should be in addition to your independent examination from your
          own doctor.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          9. Inquire whether adequate insurance has been taken. Whether rescue
          insurance has also been taken?
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          Adequate insurance should be taken to cover the lives of the
          organisers, participants as well as staff hired by the organisers.
          Adequate rescue insurance will ensure that even if air rescue is
          necessary, the organisers will not hesitate to opt for it.
        </Typography>
        <Divider sx={{ my: 2, color: "gray" }}></Divider>
        <Typography variant="h6" color="orange" style={{ marginTop: "10px" }}>
          IMF Safety Guidelines For Mountaineering Expeditions
        </Typography>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          INTRODUCTION
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.1 Mountaineering is an activity for which Indian Mountaineering
          Foundation (IMF) is responsible to the Govt of India through the
          Foreigner's act and other statutes. All tour operators must keep
          abreast of these guidelines.
        </Typography>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          GUIDES/INSTRUCTORS
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.2 Lead guides and instructors who are leading mountaineering
          activities should, as a minimum, hold valid certificates the
          following:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>a)</ListItemIcon>
            <ListItemText primary="		A minimum 16 hour (2 day) first aid course provided by a recognized and qualified provider."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>b)</ListItemIcon>
            <ListItemText primary="			Completed the Advanced Mountaineering Course from any of the National Mountaineering Institutes."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>c)</ListItemIcon>
            <ListItemText primary="				Maintain a log book containing IMF authenticated records of mountaineering experience.."></ListItemText>
          </ListItem>
        </List>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          EQUIPMENT
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.3 The correct use and proper maintenance of climbing equipment is
          essential for conducting mountaineering activities and should never be
          taken lightly.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.4 Personal Protection Equipment, should be UIAA certified.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.5 Rope - There are many different types of rope. The operator and
          leader must have a sound knowledge of specifically designed climbing
          rope, including the different types and applications. Climbing rope
          comes in different diameters and specifications but the basics are
          dynamic, semi static and static. A safe working load of 25KN (2.5
          tons) and UIAA approval is the internationally recognized standard for
          climbing rope.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.6 Hardware (anchors, Carabineers, belay devices etc.) - There is a
          wide range of climbing aids and devices and the operator and
          instructor must have a complete and sound knowledge of their
          applications including which devices are necessary to conduct
          mountaineering activities safely. These devices are also a "link" in
          the safety chain. As per all other climbing equipment items a safe
          working load of 25KN (2.5 tons) and UIAA approval is the
          internationally recognized standard for climbing hardware and devices.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.7 All equipment is subject to wear and tear and must be checked
          before every use. Incorrect storage, use and monitoring of rated and
          approved equipment is usually the cause of equipment failure.
          Operators and leaders must have a sound knowledge of this and have
          systems in place in order to control and manage their equipment.
        </Typography>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          INSPECTION AND MAINTENANCE PROCEDURES
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.8 Inspections and maintenance require a sound knowledge of the
          systems and equipment themselves and therefore must be carried out by
          qualified persons as a minimum the inspector must be qualified to be a
          guide/instructor. Basic inspections must be carried out before every
          use with complete and detailed inspections carried out on a regular
          basis in accordance with their operations procedures and risk
          assessments.
        </Typography>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          SOP'S AND OPERATING INSTRUCTIONS
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.9 All Mountaineering Tour Operators must maintain and update a
          Standard Operating Procedure for their operations and get the same
          vetted from IMF from time to time.
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.10 Besides covering the methodologies that are adopted by the agency
          in organizing the expedition, such as assessing of members
          qualification, medical condition and experience, procedures for
          obtaining of various permissions, travel to the mountain, maintenance
          of base camp including hygiene, avoidance of high altitude sickness,
          safety precautions, communication, weather reports, procedure for
          emergencies, casualty evacuation, incident and accident reporting,
          feedback mechanism the following must be included in the SOPS:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>a)</ListItemIcon>
            <ListItemText primary="		The guiding and porter staff on the mountain and the material supplied must be adequate for the aims of the party and stated level of service offered."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>b)</ListItemIcon>
            <ListItemText primary="				An experienced doctor in the party is desirable but at the very least advance arrangements must be known for medical help. Advance arrangements must also be made for evacuation assistance in case of emergency."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>c)</ListItemIcon>
            <ListItemText primary="				Advertising must give a true picture of all the difficulties and dangers involved, and avoid promising the impossible. If an expedition is commercially launched by an operator, then the Biographical information about the guiding team should be included."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>d)</ListItemIcon>
            <ListItemText primary="					The client must truthfully reveal his experience, supported by documentation/photograph, medical history etc to the organiser so that the organiser can make an informed choice about the potential client."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>e)</ListItemIcon>
            <ListItemText primary="	Information supplied in advance will include a clear statement of the guiding, porterage and equipment which will be supplied by the organiser, together with details of the clothing and equipment to be supplied by the client. This is not in context of the operators assisting expeditions with logistics alone."></ListItemText>
          </ListItem>
        </List>
        <Typography color="black" variant="h6" style={{ marginTop: "10px" }}>
          DOCUMENTATION
        </Typography>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.11 The tour operator must maintain, at the minimum the following
          documentation:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>a)</ListItemIcon>
            <ListItemText primary="	Details of all Guides and Instructors including, copies of certifications, record of expedition experience and feedback from clients."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>b)</ListItemIcon>
            <ListItemText primary="	Copies of all Permits and Permissions of current expeditions."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>c)</ListItemIcon>
            <ListItemText primary="	Copies of identification documents, Insurance cover and details of next of kin for all participants, guides and instructors."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>d)</ListItemIcon>
            <ListItemText primary="Copy of SOP."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>e)</ListItemIcon>
            <ListItemText primary="	Current list of emergency contact numbers"></ListItemText>
          </ListItem>
        </List>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.12 RISK MITIGATION
        </Typography>
        <Typography color="black" style={{ marginTop: "10px" }}>
          In order to mitigate the risk of high altitude, the following is
          advised:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>a)</ListItemIcon>
            <ListItemText primary="	To get participants medically examined before starting on the journey."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>b)</ListItemIcon>
            <ListItemText primary="	To ensure that at least one or two members of the expedition have experience of high altitude climbing"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>c)</ListItemIcon>
            <ListItemText primary="	To provide wireless sets or take on hire from IMF, for communication between camps on the mountain and the base camp."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>d)</ListItemIcon>
            <ListItemText primary="	To bring radio receiving sets in case weather forecasts by the All India Radio are required to be arranged by the IMF."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>e)</ListItemIcon>
            <ListItemText primary="	To ensure that environment safeguards are implemented in their programme so that the area and peak visited by them suffers no damage, and is left clean for subsequent expeditions."></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>f)</ListItemIcon>
            <ListItemText primary="	Environment guidelines provided by IMF shall be followed strictly."></ListItemText>
          </ListItem>
        </List>
        <Typography
          color="black"
          fontWeight="bold"
          style={{ marginTop: "10px" }}
        >
          1.13 EMERGENCIES AND RESCUES
        </Typography>
        <List>
          <ListItemIcon>a)</ListItemIcon>
          <ListItemText primary="	Adequate first aid medical equipment must be available on site Evacuation routes must identified and known to participants, guides and instructors of the team." />
          <ListItemIcon>b)</ListItemIcon>
          <ListItemText primary="	A detailed and documented evacuation/emergency procedure must be available at the base camp along with closest available emergency services which can be called upon as required." />
        </List>
        <Divider sx={{ my: "2", color: "gray" }} />
        <Typography color="black" variant="h4" style={{ marginTop: "10px" }}>
          Recommendations
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          Recommendations for care to be taken by Persons, Organisations, Clubs
          Or Tour Operators conducting out-door activities, adventure treks and
          training-camps.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          1. Register the organisation with the Indian Mountaineering
          Foundation.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          2. Ensure that the program is realistic :
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          Specification of the activities: whether rock -climbing , river
          crossing , or only trail walking. Leisure and informative, and
          practical activities like map-reading, rope practise, setting of a
          camp, all these should be part of the programme, only physical
          activities can be very exhaustive or boring. Programme should allow
          sufficient time to the participants to cope with the schedule.
          Specially for high altitude areas, sufficient time is necessary for
          acclimatisation.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          3. Decide the size of the group and number of co-ordinators who will
          accompany the group with thoughts about safety.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          4. Inform the participants of the various activities like
          rock-climbing ,river-crossing its meaning and the risks involved in
          the activities and the care the organisation will take to reduce the
          risks involved.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          5. Ensure proper medial aid is made available to the participants
          through the course which is adequate considering the nature of
          activity to be conducted. Mini First aid kits should be kept handy.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          6. In the case of High Altitude treks / programs, insure that at least
          one person per 15 participants is qualified with a Basic Course in
          Mountaineering, has been to the high altitude on at least 2 previous
          occasions and has sufficient knowledge of high altitude sickness, its
          symptoms and how they are to be dealt with.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          7. Acclimatisation process and its problems are unknown to city
          people. Ensuring this as the most important factor in Himalayan
          trekking is known to participants. Inform about its symptoms,
          prevention and signs right in the beginning. In case of High Altitude
          treks / programs, provide sufficient knowledge to the participants for
          them to be aware about a problems that can affect them and what are
          the precautions they must take to prevent it. Also what are the
          symptoms they must recognise for themselves.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          Ensure that the group leaders, instructors etc. are adequately trained
          to impart immediate first aid .such persons to accompany the
          participants during each stage of the trek or activity. It is the
          responsibility of the organisation to send group leaders, instructors
          who are able to deal with emergencies and are trained in Wilderness
          First-aid.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          8. The organisation must ensure that no alcohol or drug abuse takes
          place at the program. The attitude of the organisers should be of
          caring and not of defiance, Nature has to be well respected to be
          enjoyed ,just as we learn safety rules of road crossing in the city
          ,one learns the rules of walking and climbing and living in the
          mountains , for ones safety and enjoyment.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          9. Provide a list of Dos and Donts on the program.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          10. If the programme is conducted through a fixed camp, the organisers
          must provide for a latrine area where the pit is 4-5 deep. On the
          trail, the organisers must at least initially every evening give a
          talk on how to "shit in the woods". i.e. be at least 300 feet away
          from a water source, participants must dig a hole at least 6". If they
          are using toilet paper, it must be buried , and after the job is done,
          cover up the hole. Participants must be encouraged to go away from the
          camp area for the morning job.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          11. Provide an exhaustive list of things to be brought by the
          participants, specially those necessary to ensure safety of the
          participants. Also strictly enforce that unnecessary items which are
          bulky and are of hindrance on the trek are not carried.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          Prepare a note which gives full details about the particular
          programme. It should include information about: day-wise schedule,
          plans, heights of each camps, height gains between each camp, safety
          measures adopted, brief description of the route, sketch-map of the
          area, small historical note.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          For emergencies organisers should provide: name of contact persons,
          contact addresses, phone numbers, nearest road approaches to places of
          visit, full travel plans including details of trained bus routes and
          timings. This will help parents to plan better and keep anxiety level
          (if any) to minimum.
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          All these will project the organisers as an active, knowledgeable and
          professional outfit.
        </Typography>
        <Divider sx={{ my: 2, color: "gray" }}></Divider>
        <Typography color="black" variant="h4" style={{ marginTop: "10px" }}>
          Android Mobile App For Location Tracking
        </Typography>
        <Typography color="black" fontSize="15px" style={{ marginTop: "10px" }}>
          In context to our continuous effort towards safety, we have designed
          an android mobile app that is capable of tracking user's location
          during expedition. Please refer to the step by step guide to download
          and use the Android Mobile App. <span style={{color:'orange'}}>Download User Manual</span>
        </Typography>
      </Container>
    </div>
  );
}

export default SafetyAdvisory;
