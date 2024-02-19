import {createTRPCReact} from "@trpc/react-query";
import type { TappRouter } from "./";
export const trpc = createTRPCReact<TappRouter>({})