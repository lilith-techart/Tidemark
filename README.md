# Tidemark

**Unreal Engine / Technical Art** · Real-time environment research

**WIP — First Art Pass awaiting human review.**

![Tidemark First Art Pass scene capture, three-quarter view](media/first-art-pass.png)

## 要解决的问题

如何让环境视觉迭代保留可走的路线、稳定的场景结构和可替换的资产边界？Tidemark 连接场景 construction、visual / collision separation 和技术验证，用实际 UE 捕获解释迭代结果。

## Implemented

- 语义场景组织、blockout 与 First Art Pass。
- 可替换视觉层与独立 gameplay collision surface。
- 相机输出、Python / C++ observation 与 validation tooling。
- 已有 ACharacter / CharacterMovement 路线与 trigger-sequence 的历史检查记录。

## Results / Evidence

![Greybox versus First Art Pass, recorded scene comparison](media/greybox-comparison.png)

对照呈现白盒到第一轮视觉层的变化；**First Art Pass 不等于最终美术验收**。

[技术拆解与场景细节](docs/technical-overview.md) · [状态、验证范围与 Roadmap](docs/status.md)

## WIP / Roadmap

Human art review 尚未通过，production greybox 仍未锁定。水面边界、参数化植被/岩石、立面与 boardwalk/dock 过渡继续迭代。机器检查不能代替人工美术判定。

本仓库是教师与作品集审阅入口，不包含完整 UE 工程。这里的场景水材质不等于 Unity 的 FluidMatter renderer。

## Distribution / Attribution

Source/project distribution is not currently provided. 没有提供完整工程、插件二进制、课程素材或可运行下载；本次没有指定开源许可证。

媒体是使用 Unreal Engine 基础形状与本项目材质生成的渲染截图。[Unreal Engine](https://www.unrealengine.com/) 为 Epic Games 的技术与商标；没有再分发 Engine 或素材源文件。未确认许可的课程/第三方内容不在本次发布集合中。

[Lilith — Portfolio](https://github.com/lilith-techart)
