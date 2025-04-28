import { Container, Typography, Button, Box, Paper } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container
      style={{
        textAlign: "center",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "40px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            fontWeight: "bold",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
          Welcome to TruePrep's Virtual Dave!
        </Typography>
        <Typography
          variant="body1"
          style={{
            marginBottom: "30px",
            color: "#7f8c8d",
            lineHeight: "1.6",
          }}
        >
          I'm Virtual Dave, your AI-powered assistant for tax accounting firms
          and CPAs. Let's discuss how TruePrep.ai can streamline your workflows
          and help you achieve more with less effort!
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Button
            href={"/voice-chat"}
            variant="contained"
            color="primary"
            style={{
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Go to Chat
          </Button>
          <Button
            href={"/video-creator"}
            variant="outlined"
            color="primary"
            style={{
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
          >
            Go to Video Generation
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;
