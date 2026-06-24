"use client";

import React, { useState } from "react";
import { ConfigProvider, theme, Menu, Button, Drawer } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  CheckSquareOutlined,
  ToolOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  BankOutlined,
  ExperimentOutlined,
  MenuOutlined,
  SunOutlined,
  MoonOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const menuItems = [
  { key: "/", icon: <HomeOutlined />, label: <Link href="/">Главная</Link> },
  { key: "/about", icon: <UserOutlined />, label: <Link href="/about">Кто это</Link> },
  { key: "/tasks", icon: <CheckSquareOutlined />, label: <Link href="/tasks">Задачи</Link> },
  { key: "/skills", icon: <ToolOutlined />, label: <Link href="/skills">Навыки</Link> },
  { key: "/career", icon: <RocketOutlined />, label: <Link href="/career">Карьера</Link> },
  { key: "/day", icon: <ClockCircleOutlined />, label: <Link href="/day">День</Link> },
  { key: "/ertholding", icon: <BankOutlined />, label: <Link href="/ertholding">ЭР-Телеком</Link> },
  { key: "/quiz", icon: <ExperimentOutlined />, label: <Link href="/quiz">Тест</Link> },
];

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme: currentTheme, toggleTheme, a11y, toggleA11y } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#00d4aa",
          colorBgContainer: currentTheme === "dark" ? "#111827" : "#ffffff",
          colorBgElevated: currentTheme === "dark" ? "#1a2332" : "#f8fafc",
          colorText: currentTheme === "dark" ? "#e2e8f0" : "#334155",
          colorTextSecondary: currentTheme === "dark" ? "#94a3b8" : "#64748b",
          borderRadius: 8,
          fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        },
      }}
    >
      <div className="min-h-screen flex flex-col bg-base">
        <header className="sticky top-0 z-50 bg-base/90 backdrop-blur-md border-b border-line">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-accent font-bold text-lg no-underline">
              <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-sm text-on">PM</span>
              <span className="hidden sm:inline">Продуктовый менеджер</span>
            </Link>

            <nav className="hidden md:block">
              <Menu
                mode="horizontal"
                selectedKeys={[pathname]}
                items={menuItems}
                style={{ background: "transparent", borderBottom: "none" }}
              />
            </nav>

            <div className="flex items-center gap-1">
              <Button
                type="text"
                icon={currentTheme === "dark"
                  ? <SunOutlined style={{ color: "#00d4aa" }} />
                  : <MoonOutlined style={{ color: "#00b894" }} />}
                onClick={toggleTheme}
              />
              <Button
                type="text"
                icon={<FontSizeOutlined style={{ color: a11y ? "#00d4aa" : "#94a3b8" }} />}
                onClick={toggleA11y}
              />
              <Button
                className="md:hidden"
                type="text"
                icon={<MenuOutlined style={{ color: "#00d4aa" }} />}
                onClick={() => setDrawerOpen(true)}
              />
            </div>
          </div>
        </header>

        <Drawer
          title={<span style={{ color: "#00d4aa" }}>Навигация</span>}
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{ body: { background: "var(--color-base)", padding: 0 }, header: { background: "var(--color-card)", borderColor: "var(--color-line)" } }}
        >
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            items={menuItems}
            onClick={() => setDrawerOpen(false)}
            style={{ background: "transparent", borderRight: "none" }}
          />
        </Drawer>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-line py-8 text-center text-muted text-sm">
          <p>Продуктовый менеджер — профессия, где решения превращаются в продукты</p>
          <p className="mt-1 text-accent">ЭР-Телеком Холдинг © 2025</p>
        </footer>
      </div>
    </ConfigProvider>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </ThemeProvider>
  );
}
