import app from "./app";

app.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});
