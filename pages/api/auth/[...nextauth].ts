import NextAuth from "next-auth";

import { authOptions } from "@/lib/auth";

export default (req, res) => NextAuth(req, res, authOptions);
