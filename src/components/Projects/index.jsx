import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import DailyCast from "../../assets/projects/DailyCast.svg";
import Dr from "../../assets/projects/Dr.svg";
import JM from "../../assets/projects/JM.svg";
import PartyPals from "../../assets/projects/PartyPals.svg";
import Prateek from "../../assets/projects/Prateek.svg";
import Quatro from "../../assets/projects/quatro.svg";
import WWC from "../../assets/projects/WWC.svg";
import DailyCastPhone from "../../assets/projects/DailyCastPhone.svg";
import Drphone from "../../assets/projects/Drphone.svg";
import JMphone from "../../assets/projects/JMphone.svg";
import PartyPalsphone from "../../assets/projects/PartyPalsphone.svg";
import Prateekphone from "../../assets/projects/Prateekphone.svg";
import quatrophone from "../../assets/projects/quatrophone.svg";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(1);

  const projects = [
    {
      id: 1,
      name: "Party Pals",
      tech: "MERN, CSS, Material UI",
      link: "https://fuel-ed.vercel.app/",
      image: PartyPals,
      imagePhn: PartyPalsphone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #E3E8DF 0%, #626E5F 100%)",
      type: "Service",
    },
    {
      id: 2,
      name: "WWC NGO",
      tech: "MERN, CSS, Material UI",
      link: "https://www.warriorswithoutcause.org/",
      image: WWC,
      imagePhn: WWC,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #FFD1EB 0%, #C30178 100%)",
      type: "Service",
    },
    {
      id: 3,
      name: "Dr Akansha Agarwal",
      tech: "Next.js, MongoDB, Express.js, Node.js, Material UI, CSS ",
      link: "https://dr-sandy.vercel.app/",
      image: Dr,
      imagePhn: Drphone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #FFE2E9 0%, #AE0345 100%)",
      type: "Service",
    },
    {
      id: 4,
      name: "Jagriti Malhotra",
      tech: "HTML, CSS, JavaScript",
      link: "https://www.jagritimalhotra.com/",
      image: JM,
      imagePhn: JMphone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #E1E1E1 0%, #8C0010 100%)",
      type: "Portfolio",
    },
    {
      id: 5,
      name: "Quatro",
      tech: "React.js, CSS",
      link: "https://www.quatro.in/",
      image: Quatro,
      imagePhn: quatrophone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #7D7D7D 0%, #000000 100%)",
      type: "Business",
    },
    {
      id: 6,
      name: "Prateek Nikam",
      tech: "React.js, CSS",
      link: "https://my-app-six-inky.vercel.app/",
      image: Prateek,
      imagePhn: Prateekphone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #A0B5C2 0%, #001E67 100%)",
      type: "Portfolio",
    },
    {
      id: 7,
      name: "WeatherCast",
      tech: "React.js , CSS, API Integration",
      link: "https://weather-sooty-tau.vercel.app/",
      image: DailyCast,
      imagePhn: DailyCastPhone,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #A0B5C2 0%, #1E6085 100%)",
      type: "Utility",
    },
  ];

  const selected = projects.find((project) => project.id === selectedProject);

  return (
    <Box
      sx={{
        backgroundColor: "rgba(137, 104, 166, 1)",
        display: "flex",
        pt: { lg: 14, xs: 8 },
        pb: 10,
        flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontSize: { md: "100px", xs: "64px" },
          fontWeight: 700,
          pb: 3,
          margin: "0 auto",
          marginBottom: "20px",
          display: { lg: "none", md: "flex" },
        }}
      >
        PROJECTS
      </Typography>
      <Box
        sx={{
          width: { lg: "50%", md: "90%", sm: "90%", xs: "90%" },
          margin: { lg: "0", md: "0 auto", sm: "0 auto", xs: "0 auto" },
          height: { lg: "600px", md: "500px", sm: "400px", xs: "200px" },
          borderRadius: {
            lg: "0px 44px 44px 0px",
            md: "44px",
            sm: "44px",
            xs: "13px",
          },
          background: selected.bgColor,
          boxShadow: {
            lg: "0px 36px 55px 0px rgba(0, 0, 0, 0.25)",
            xs: "none",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={window.innerWidth < 768 ? selected.imagePhn : selected.image}
          alt=""
          style={{
            width: "90%",
            height: "auto",
            maxWidth: "679px",
            maxHeight: "311px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: { lg: "0 50px", md: "0" },
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontSize: "100px",
            fontWeight: 700,
            pb: 0,
            display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            height: "125px",
            top: "-40px",
            position: "relative",
          }}
        >
          PROJECTS
        </Typography>
        <Box
          sx={{
            marginTop: { lg: "0", md: "100px", sm: "100px", xs: "50px" },
            maxHeight: { lg: "490px", md: "auto" },
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                borderBottom: "1px solid black",
                pb: 1,
                cursor: "pointer",
                padding: {
                  lg: "0",
                  md: "10px 30px",
                  sm: "10px 30px",
                  xs: "10px 15px",
                },
              }}
              onClick={() => setSelectedProject(project.id)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: { lg: "40px", md: "40px", xs: "24px" },
                    fontWeight: 700,
                    textAlign: "left",
                    color:
                      selectedProject === project.id
                        ? "black"
                        : "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {project.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontSize: { lg: "20px", md: "20px", xs: "15px" },
                    fontWeight: 500,
                    textAlign: "left",
                  }}
                >
                  {project.type}
                </Typography>
              </Box>
              <Collapse in={selectedProject === project.id}>
                <Typography
                  sx={{
                    fontFamily: "Roboto Slab",
                    fontSize: { lg: "20px", md: "20px", xs: "16px" },
                    fontWeight: 400,
                    color: "rgba(218, 183, 216, 1)",
                    textAlign: "left",
                  }}
                >
                  Tech Stack : {project.tech}
                </Typography>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "rgba(218, 183, 216, 1)",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Roboto Slab",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#603784",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    View live Project{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      sx={{ color: "#603784" }}
                    />
                  </Typography>
                </a>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
