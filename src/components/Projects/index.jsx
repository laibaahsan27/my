import React, { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import DailyCast from "../../assets/projects/DailyCast.svg";
import Dr from "../../assets/projects/Dr.svg";
import JM from "../../assets/projects/JM.svg";
import PartyPals from "../../assets/projects/PartyPals.svg";
import Prateek from "../../assets/projects/Prateek.svg";
import Quatro from "../../assets/projects/quatro.svg";
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
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #E3E8DF 0%, #626E5F 100%)",
      type: "Service",
    },
    {
      id: 2,
      name: "Dr Akansha Agarwal",
      tech: "Next.js, MongoDB, Express.js, Node.js, Material UI, CSS ",
      link: "https://dr-sandy.vercel.app/",
      image: Dr,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #FFE2E9 0%, #AE0345 100%)",
      type: "Service",
    },
    {
      id: 3,
      name: "Jagriti Malhotra",
      tech: "HTML, CSS, JavaScript",
      link: "https://www.jagritimalhotra.com/",
      image: JM,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #E1E1E1 0%, #8C0010 100%)",
      type: "Portfolio",
    },
    {
      id: 4,
      name: "Quatro",
      tech: "React.js, CSS",
      link: "https://www.quatro.in/",
      image: Quatro,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #7D7D7D 0%, #000000 100%)",
      type: "Business",
    },
    {
      id: 5,
      name: "Prateek Nikam",
      tech: "React.js, CSS",
      link: "https://my-app-six-inky.vercel.app/",
      image: Prateek,
      bgColor:
        "radial-gradient(85.45% 85.45% at 50% 50%, #A0B5C2 0%, #001E67 100%)",
      type: "Portfolio",
    },
    {
      id: 6,
      name: "WeatherCast",
      tech: "React.js , CSS, API Integration",
      link: "https://weather-sooty-tau.vercel.app/",
      image: DailyCast,
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
        pt: 10,
        pb: 10,
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "600px",
          borderRadius: "0px 44px 44px 0px",
          background: selected.bgColor,
          boxShadow: "0px 36px 55px 0px rgba(0, 0, 0, 0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={selected.image}
          alt=""
          style={{ width: "679px", height: "311px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: "7%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Playfair Display",
            fontSize: "100px",
            fontWeight: 700,
            pb: 3,
          }}
        >
          PROJECTS
        </Typography>
        <Box
          sx={{
            maxHeight: "400px",
            overflowY: "auto",
            scrollbarWidth: "none" /* Firefox */,
            "&::-webkit-scrollbar": {
              display: "none" /* Chrome, Safari, and Opera */,
            },
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                borderBottom: "1px solid black",
                width: "80%",
                pb: 1,
                cursor: "pointer",
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
                    fontSize: "40px",
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
                    fontSize: "20px",
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
                    fontSize: "20px",
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
                      color: "rgba(218, 183, 216, 1)",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    View live Project{" "}
                    <ArrowOutwardIcon
                      fontSize="small"
                      sx={{ color: "rgba(218, 183, 216, 1)" }}
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
