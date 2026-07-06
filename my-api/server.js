const http = require("http");
const { Pool } = require("pg");

const poolContacts = new Pool({
  user: "postgres",
  host: "localhost",
  database: "contact_db",
  password: "Oracle24",
  port: 5432,
});

//configurez conexiunea Postgre

const poolCards = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Cards_Popular_Topics",
  password: "Oracle24",
  port: 5432,
});

//test de conexiune

poolContacts
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.log("Error:", err.message));

//Creare Server http

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  //ruta 1-  pentru contacte
  if (req.method === "GET" && req.url === "/contacts") {
    try {
      const result = await poolContacts.query("SELECT * FROM contacts");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result.rows));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  } else if (req.method === "POST" && req.url === "/contacts") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const {
          firstName,
          lastName,
          email,
          phoneNumber,
          country,
          option,
          textMessage,
        } = JSON.parse(body);

        await poolContacts.query(
          `INSERT INTO contacts (first_name, last_name, email, phone_number, country, subject, message)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            option,
            textMessage,
          ],
        );

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Contact salvat!" }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }

  //ruta 2 - pentru Carduri Popoular_Topics
  //GET. Cards
  else if (req.method === "GET" && req.url === "/cards") {
    try {
      const result = await poolCards.query('SELECT * FROM "Popular_Topics"');
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(result.rows));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
  //POST/ cards
  else if (req.method === "POST" && req.url === "/cards") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { tag, image, alt, time, title, link, content } =
          JSON.parse(body);

        await poolCards.query(
          `INSERT INTO "Popular_Topics" (tag, image, alt, time, title, link, content)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [tag, image, alt, time, title, link, content],
        );

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Card salvat!" }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  }
  //ruta 3 - pentru Carduri Editor_Pick
  //GET. Cards
  else if (req.method === "GET" && req.url === "/Editor_Pick") {
    try {
      const result = await poolCards.query('SELECT * FROM "Editor_Pick"');
      res.end(JSON.stringify(result.rows));
    } catch (error) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  }
  //POST/ cards
  else if (req.method === "POST" && req.url === "/Editor_Pick") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const { tag, image, alt, time, title, link, content } =
          JSON.parse(body);

        await poolCards.query(
          `INSERT INTO "Editor_Pick" (tag, image, alt, time, title, link, content)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [tag, image, alt, time, title, link, content],
        );

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Editor Pick salvat!" }));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: error.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Ruta nu există" }));
  }
});

server.listen(3000, () => {
  console.log("Server pornit pe http://localhost:3000");
});
