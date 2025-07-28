import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

function RegisterPage() {
  return (
    <Container maxWidth="lg" className="min-h-full">
      <Card className="min-h-[400px] max-w-[600px] m-auto">
        <Typography variant="h2" component="h1" align="center">
          Registration Page
        </Typography>
        <Box className="flex flex-col">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
            />
          </FormControl>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained">
            Sign in
          </Button>
        </Box>
      </Card>
    </Container>
  );
}

export const Component = RegisterPage;
