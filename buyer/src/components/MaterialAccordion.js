import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function MaterialAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Construction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Utilities & Green  Energy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Community & Neighborhood</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Days on Market</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Property Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Price & Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Text goes here ...</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;