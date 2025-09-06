import {
  ChartNoAxesCombined,
  CodeXml,
  DraftingCompass,
  Footprints,
  Goal,
  Lightbulb,
  List,
  Rocket,
} from "lucide-react";

export const CLASS_CATEGORY = [
  { id: 1, label: "전체", category: "", icon: <List /> },
  { id: 2, label: "카테고리1", category: "category1", icon: <Lightbulb /> },
  { id: 3, label: "카테고리2", category: "category2", icon: <Rocket /> },
  { id: 4, label: "카테고리3", category: "category3", icon: <CodeXml /> },
  { id: 5, label: "카테고리4", category: "category4", icon: <Goal /> },
  {
    id: 5,
    label: "카테고리5",
    category: "category5",
    icon: <ChartNoAxesCombined />,
  },
  {
    id: 7,
    label: "카테고리6",
    category: "category6",
    icon: <DraftingCompass />,
  },
  { id: 8, label: "카테고리7", category: "category7", icon: <Footprints /> },
];
