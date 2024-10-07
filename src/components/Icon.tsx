export default function Icon({ type, fill }: { type: string; fill: string }) {

  switch (type) {
    case "dropdown":
      return (<svg width="95%" height="100%" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.5975 6.42175C13.0079 6.42175 13.2435 6.88884 12.9996 7.21889L8.75541 12.9628C8.55555 13.2333 8.15101 13.2333 7.95115 12.9628L3.70695 7.21889C3.46307 6.88884 3.6987 6.42175 4.10908 6.42175L12.5975 6.42175Z" fill={fill} />
      </svg>)
  }
}
