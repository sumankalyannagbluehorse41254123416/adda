// import axios from "axios";
// import crypto from "crypto";

// interface FetchBannerDataParams {
//   host?: string;
//   [key: string]: unknown;
// }

// interface ApiResponse {
//   success?: boolean;
//   data?: unknown;
//   [key: string]: unknown;
// }

// export async function fetchBanner({
//   host,
//   uid,
//   ...rh
// }: FetchBannerDataParams): Promise<ApiResponse> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const key = process.env.NEXT_PUBLIC_API_KEY;
//   const secret = process.env.NEXT_PUBLIC_API_SECRET;

//   if (!baseUrl || !key || !secret) {
//     throw new Error(
//       "Missing environment variables (BASE_URL, API_KEY, API_SECRET)."
//     );
//   }

//   const timeStamp = Date.now();
//   const body = { timestamp: timeStamp };
//   const payload = JSON.stringify(body);

//   const signature = crypto
//     .createHmac("sha256", secret)
//     .update(payload)
//     .digest("hex");

//   const headers: Record<string, string> = {
//     ...rh,
//     "X-AUTH-APIKEY": key,
//     "X-AUTH-SIGNATURE": signature,
//     "X-AUTH-TIMESTAMP": timeStamp.toString(),
//     "Content-Type": "application/json",
//     "x-host": host || "localhost:3000",
//   };

//   try {
//     const response = await axios.get(
//       `${baseUrl}/banner/fetch-single-banner/${uid}`,
//       {
//         headers,
//       }
//     );
//     return response.data;
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error("Fetch error details:", {
//         message: error.message,
//         status: error.response?.status,
//         statusText: error.response?.statusText,
//         data: error.response?.data,
//       });
//     } else if (error instanceof Error) {
//       console.error("Fetch error details:", { message: error.message });
//     } else {
//       console.error("Unknown fetch error:", error);
//     }

//     throw new Error("Failed to fetch banners.");
//   }
// }
import axios from "axios";
import crypto from "crypto";

/* ================= TYPES ================= */

export interface BannerData {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
  mobileImage?: string;
  status: string;
  type: string;
}

interface FetchBannerDataParams {
  host?: string;
  uid: string;
  [key: string]: unknown;
}

export interface BannerApiResponse {
  status: boolean;
  message: string;
  singlebannerData: BannerData[];
}

/* ================= FETCH FUNCTION ================= */

export async function fetchBanner({
  host,
  uid,
  ...rh
}: FetchBannerDataParams): Promise<BannerApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!baseUrl || !key || !secret) {
    throw new Error("Missing environment variables");
  }

  const timeStamp = Date.now();
  const payload = JSON.stringify({ timestamp: timeStamp });

  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const headers: Record<string, string> = {
    ...rh,
    "X-AUTH-APIKEY": key,
    "X-AUTH-SIGNATURE": signature,
    "X-AUTH-TIMESTAMP": timeStamp.toString(),
    "Content-Type": "application/json",
    "x-host": host || "localhost:3000",
  };

  try {
    const response = await axios.get<BannerApiResponse>(
      `${baseUrl}/banner/fetch-single-banner/${uid}`,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Banner fetch failed", error);
    throw new Error("Failed to fetch banner");
  }
}
