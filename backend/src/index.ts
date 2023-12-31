import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";

import CheckoutService from "./services/CheckoutService";
import { SnackData } from "./interfaces/SnackData";
import { CustomerData } from "./interfaces/CustomerData";
import { PaymentData } from "./interfaces/PaymentData";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

// const options = {
//   // origin: "http://127.0.0.1:3000",
//   // origin: "http://192.168.31.5:3000",
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
const allowedOrigins = ["http://localhost:3000"];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(express.json());
app.use(cors(options));

app.get("/", (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) return res.status(400).send({ error: "Message is required" });

  res.send({ message });
});

app.get("/snacks", async (req: Request, res: Response) => {
  const { snack } = req.query;

  if (!snack) return res.status(400).send({ error: "Snack is required" });

  const snacks = await prisma.snack.findMany({
    where: {
      snack: {
        equals: snack as string,
      },
    },
  });
  res.send({ snacks });
});

app.get("/orders/:id", async (req: Request, res: Response) => {
  // codigo original gera erro
  /* const { id } = req.params;

  const order = await prisma.order.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!order) return res.status(404).send({ error: "Order not found" });

  res.send({ order }); */

  const { id } = req.params;
  let order;

  try {
    order = await prisma.order.findUnique({
      where: {
        id: parseInt(id),
      },
      include: { customer: true, orderItems: { include: { snack: true } } },
    });
  } catch (error) {
    console.error(error);
  }

  if (!order) return res.status(404).send({ error: "Order not found" });

  res.send({ order });
});

interface CheckoutRequest extends Request {
  body: {
    cart: SnackData[];
    customer: CustomerData;
    payment: PaymentData;
  };
}

app.post("/checkout", async (req: CheckoutRequest, res: Response) => {
  const { cart, customer, payment } = req.body;

  const orderCreated = await new CheckoutService().process(
    cart,
    customer,
    payment
  );

  res.send(orderCreated);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
