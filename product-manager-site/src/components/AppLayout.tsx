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
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#00d4aa",
          colorBgContainer: "#111827",
          colorBgElevated: "#1a2332",
          colorText: "#e2e8f0",
          colorTextSecondary: "#94a3b8",
          borderRadius: 8,
          fontFamily: "var(--font-geist-sans), Arial, sans-serif",
        },
      }}
    >
      <div className="min-h-screen flex flex-col bg-[#0a0e17]">
        <header className="sticky top-0 z-50 bg-[#0a0e17]/90 backdrop-blur-md border-b border-[#1e3a4a]">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-[#00d4aa] font-bold text-lg no-underline">
              <span className="w-8 h-8 rounded-lg bg-[#00d4aa]/20 flex items-center justify-center text-sm">PM</span>
              <span className="hidden sm:inline">Продуктовый менеджер</span>
            </Link>

            <nav className="hidden lg:block">
              <Menu
                mode="horizontal"
                selectedKeys={[pathname]}
                items={menuItems}
                style={{ background: "transparent", borderBottom: "none" }}
              />
            </nav>

            <Button
              className="lg:hidden"
              type="text"
              icon={<MenuOutlined style={{ color: "#00d4aa" }} />}
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </header>

        <Drawer
          title={<span style={{ color: "#00d4aa" }}>Навигация</span>}
          placement="right"
          onClose={() => setDrawerOpen(false)}
          open={drawerOpen}
          styles={{ body: { background: "#0a0e17", padding: 0 }, header: { background: "#111827", borderColor: "#1e3a4a" } }}
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

        <footer className="border-t border-[#1e3a4a] py-8 text-center text-[#94a3b8] text-sm">
          <p>Продуктовый менеджер — профессия будущего</p>
          <p className="mt-1 text-[#00d4aa]">ЭР-Телеком Холдинг</p>
        </footer>
      </div>
    </ConfigProvider>
  );
}
