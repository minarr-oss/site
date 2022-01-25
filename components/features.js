import { useRouter } from "next/router";
import styles from "./features.module.css";

const Feature = ({ text, icon, textStyle }) => (
  <div className={styles.feature}>
    {icon}
    <h4 style={textStyle}>{text}</h4>
  </div>
);

const TITLE_WITH_TRANSLATIONS = {
  "zh-CN": "为快速交付打造的应用分发平台",
};

// Transaltions for Features
const FEATURES_WITH_TRANSLATIONS = {
  "zh-CN": {
    lightweight: "简单易用",
    builds: "自动构建",
    multiLanguagesSupport: '多语言支持',
    integrateWithRepository: '代码仓库集成',
    autoScaling: '弹性伸缩',
    metrics: '应用指标',
    more: '持续画饼中',
  },
};

export default () => {
  const { locale, defaultLocale } = useRouter();

  const featureText = (key) =>
    FEATURES_WITH_TRANSLATIONS[locale]?.[key] ??
    FEATURES_WITH_TRANSLATIONS[defaultLocale][key]; // Fallback for missing translations

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <div className={styles.features}>
        <Feature
          text={featureText("lightweight")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          }
        />
        <Feature
          text={featureText("integrateWithRepository")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
              <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("multiLanguagesSupport")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("builds")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("autoScaling")}
          textStyle={{ color: '#777' }}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#777"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="2"></circle>
              <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("metrics")}
          textStyle={{ color: '#777' }}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#777"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <Feature
          text={featureText("more")}
          textStyle={{ color: '#777' }}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#777"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          }
        />
      </div>
    </div>
  );
};
