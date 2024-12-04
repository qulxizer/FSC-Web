# FSC-Web
This is the frontend of our farm management system

## Getting Started

Downloading required packages:
```bash
curl -fsSL https://bun.sh/install | bash 

wget https://github.com/pocketbase/pocketbase/releases/download/v0.23.4/pocketbase_0.23.4_linux_amd64.zip

unzip pocketbase_0.23.4_linux_amd64.zip
```

## Starting the PocketBase server
```bash

# Creating the superuser account fot the db
# Replace EMAIL with your email, Replace PASS with your password
./pocketbase superuser upsert EMAIL PASS

./pocketbase serve
```

## Lastly, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

